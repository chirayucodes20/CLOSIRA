import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ChannelBadge, StatusBadge } from '../components/Badges';

export default function ConversationDetailScreen({ route }) {
  // Getting the specific lead data passed from LeadScreen
  const { lead } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.customerName}>{lead.customer}</Text>
        <View style={styles.badgeRow}>
          <ChannelBadge channel={lead.channel} />
          <StatusBadge status={lead.status} />
        </View>
        <Text style={styles.dateText}>Received: {new Date(lead.receivedAt).toLocaleString()}</Text>
      </View>

      <View style={styles.aiBox}>
        <Text style={styles.sectionTitle}>AI Summary & SOP Match</Text>
        <View style={styles.sopLabel}>
          <Text style={styles.sopText}>Matched SOP: {lead.reason}</Text>
        </View>
        <Text style={styles.summaryText}>{lead.summary}</Text>
      </View>

      <Text style={styles.sectionTitle}>Message History</Text>
      <View style={styles.messageBubble}>
         <Text style={styles.messageText}>Simulated inbound message from {lead.channel}...</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 16 },
  headerCard: { backgroundColor: 'white', padding: 16, borderRadius: 8, marginBottom: 16, elevation: 1 },
  customerName: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  badgeRow: { flexDirection: 'row', marginBottom: 12 },
  dateText: { fontSize: 12, color: '#888' },
  aiBox: { backgroundColor: '#eef2ff', padding: 16, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: '#c7d2fe' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  sopLabel: { backgroundColor: '#4f46e5', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 4, marginBottom: 8 },
  sopText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  summaryText: { fontSize: 14, color: '#444', lineHeight: 20 },
  messageBubble: { backgroundColor: 'white', padding: 12, borderRadius: 8, borderBottomLeftRadius: 0, alignSelf: 'flex-start', maxWidth: '80%' },
  messageText: { fontSize: 14, color: '#333' }
});