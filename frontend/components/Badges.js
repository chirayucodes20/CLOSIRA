import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ChannelBadge = ({ channel }) => {
  const getStyles = () => {
    switch (channel?.toLowerCase()) {
      case 'whatsapp': return { bg: '#dcf8c6', text: '#075e54' }; // Green
      case 'email': return { bg: '#cce5ff', text: '#004085' }; // Blue
      case 'call': return { bg: '#fff3cd', text: '#856404' }; // Amber
      default: return { bg: '#e2e3e5', text: '#383d41' };
    }
  };

  const colors = getStyles();

  return (
    <View style={[styles.badge, { backgroundColor: colors.bg }]}>
      <Text style={[styles.badgeText, { color: colors.text }]}>
        {channel?.toUpperCase()}
      </Text>
    </View>
  );
};

export const StatusBadge = ({ status }) => {
  const getStyles = () => {
    switch (status?.toLowerCase()) {
      case 'new': return { bg: '#cce5ff', text: '#004085' }; // Blue
      case 'qualified': return { bg: '#d4edda', text: '#155724' }; // Green
      case 'escalated': return { bg: '#f8d7da', text: '#721c24' }; // Red
      default: return { bg: '#e2e3e5', text: '#383d41' };
    }
  };

  const colors = getStyles();

  return (
    <View style={[styles.badge, { backgroundColor: colors.bg }]}>
      <Text style={[styles.badgeText, { color: colors.text }]}>
        {status?.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 10,
    fontWeight: 'bold',
  }
});