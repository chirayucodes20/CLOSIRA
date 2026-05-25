import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChannelBadge, StatusBadge } from './Badges';

export const LeadCard = ({ lead, onPress }) => {
  // Simple time formatter for the mock date
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.name}>{lead.customer}</Text>
        <Text style={styles.time}>{formatTime(lead.receivedAt)}</Text>
      </View>
      
      <View style={styles.badgesRow}>
        <ChannelBadge channel={lead.channel} />
        <StatusBadge status={lead.status} />
      </View>

      <Text style={styles.summary} numberOfLines={1}>
        {lead.summary}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
    elevation: 2, // shadow for android
    shadowColor: '#000', // shadow for ios
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  time: {
    fontSize: 12,
    color: '#888',
  },
  badgesRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  summary: {
    fontSize: 14,
    color: '#555',
  }
});