import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

interface PhotoItem {
  uri: string;
  width: number;
  height: number;
}

const SuggestFeatureScreen = () => {
  const navigation = useNavigation();
  const [suggestion, setSuggestion] = useState('');
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  const pickImage = async () => {
    if (photos.length >= 5) {
      Alert.alert('Maximum Photos', 'You can only upload up to 5 photos.');
      return;
    }

    // İzin isteme
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Needed', 'Sorry, we need camera roll permissions to upload photos.');
      return;
    }

    // Fotoğraf seçme
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const newPhoto = {
        uri: result.assets[0].uri,
        width: result.assets[0].width,
        height: result.assets[0].height,
      };
      setPhotos([...photos, newPhoto]);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Suggest a Feature</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        <View style={styles.textInputContainer}>
          <Text style={styles.title}>How can we make Hexa better for you ?</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Write your suggestion here..."
            placeholderTextColor="#666"
            value={suggestion}
            onChangeText={setSuggestion}
            maxLength={1000}
          />
          <Text style={styles.charCount}>{suggestion.length}/1000</Text>
        </View>

        <View style={styles.photoSection}>
          <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
            <View style={styles.uploadIconContainer}>
              <Text style={styles.uploadIcon}>🖼️</Text>
            </View>
            <Text style={styles.uploadText}>Upload a photo</Text>
          </TouchableOpacity>
          
          {photos.length > 0 && (
            <View style={styles.photoList}>
              {photos.map((photo, index) => (
                <View key={index} style={styles.photoItem}>
                  <Image source={{ uri: photo.uri }} style={styles.photoThumbnail} />
                  <TouchableOpacity 
                    style={styles.removePhotoButton}
                    onPress={() => removePhoto(index)}
                  >
                    <Text style={styles.removePhotoText}>×</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          )}

          <Text style={styles.photoHelp}>
            If you have a sample photo to upload, please add it here.{'\n'}
            (optional) You can add max 5 photos.
          </Text>
        </View>

        <TouchableOpacity 
          style={[
            styles.sendButton,
            !suggestion ? styles.sendButtonDisabled : null
          ]}
          disabled={!suggestion}
        >
          <Text style={[
            styles.sendButtonText,
            !suggestion ? styles.sendButtonTextDisabled : null
          ]}>
            Send Suggestion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  textInputContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  textInput: {
    color: '#fff',
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
  },
  charCount: {
    color: '#666',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 8,
  },
  photoSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadIconContainer: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  uploadIcon: {
    fontSize: 32,
  },
  uploadText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  photoHelp: {
    color: '#666',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  sendButton: {
    backgroundColor: '#4B0082',
    paddingVertical: 16,
    borderRadius: 32,
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#1a1a1a',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sendButtonTextDisabled: {
    color: '#666',
  },
  photoList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  photoItem: {
    position: 'relative',
    margin: 4,
  },
  photoThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removePhotoButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#ff4444',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removePhotoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuggestFeatureScreen; 