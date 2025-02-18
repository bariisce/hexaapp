import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity 
        style={styles.questionContainer}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <Text style={styles.questionText}>{question}</Text>
        <Text style={styles.arrowIcon}>{isExpanded ? '▼' : '▶'}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const HelpCenterScreen = () => {
  const navigation = useNavigation();

  const faqs: FAQItemProps[] = [
    {
      question: 'Is Hexa free to use?',
      answer: 'Hexa offers both free and premium features. Basic features are available for free, while advanced features require a Pro subscription.'
    },
    {
      question: 'How to cancel my subscription?',
      answer: 'You can cancel your subscription through your account settings or the app store where you originally subscribed. The cancellation will take effect at the end of your current billing period.'
    },
    {
      question: 'How can I request a refund?',
      answer: 'To request a refund, please contact our support team through the Mail Us button below. Include your order details and reason for the refund request.'
    },
    {
      question: 'How can I delete my account?',
      answer: 'To delete your account, go to Settings > Privacy, and select "Delete Account". Please note this action cannot be undone.'
    },
    {
      question: 'Is my personal information secure?',
      answer: 'Yes, we take data security seriously. We use industry-standard encryption and security measures to protect your personal information. You can review our Privacy Policy for more details.'
    },
    {
      question: 'How can I report a bug?',
      answer: 'If you encounter any bugs or issues, please use the Mail Us button below to contact our support team. Include details about the problem and steps to reproduce it if possible.'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Need more help?</Text>
        <TouchableOpacity style={styles.mailButton}>
          <Text style={styles.mailButtonText}>Mail Us</Text>
          <Text style={styles.mailIcon}>✉️</Text>
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
  },
  faqContainer: {
    padding: 16,
  },
  faqItem: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    marginBottom: 8,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  questionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 8,
  },
  answerContainer: {
    padding: 16,
    paddingTop: 0,
  },
  answerText: {
    color: '#999',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  mailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4B0082',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  mailButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  mailIcon: {
    fontSize: 20,
  },
});

export default HelpCenterScreen; 