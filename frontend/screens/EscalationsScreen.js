import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import data from '../mock/data.json';
import { ChannelBadge } from '../components/Badges';

export default function EscalationsScreen({ navigation }) {
  // Filter only escalated leads
  const escalations = data.leads.filter(lead => lead.status === 'escalated');

  return (
    <View style={styles.container}>
      <FlatList
        data={escalations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate('ConversationDetail', { lead: item })}
          >
            <View style={styles.header}>
              <Text style={styles.name}>{item.customer}</Text>
              <Text style={styles.urgency}>High Urgency</Text>
            </View>
            <View style={styles.badgeRow}>
              <ChannelBadge channel={item.channel} />
              <Text style={styles.time}>{new Date(item.receivedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </View>
            <Text style={styles.reason}>Reason: {item.reason}</Text>
            <TouchableOpacity style={styles.resolveBtn}>
              <Text style={styles.resolveBtnText}>Resolve</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={<Text style={styles.emptyText}>No active escalations. Great job!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#f5c6cb', elevation: 2 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  urgency: { fontSize: 12, color: '#dc3545', fontWeight: 'bold', backgroundColor: '#f8d7da', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  time: { fontSize: 12, color: '#888' },
  reason: { fontSize: 14, color: '#555', marginBottom: 12 },
  resolveBtn: { backgroundColor: '#28a745', padding: 10, borderRadius: 6, alignItems: 'center' },
  resolveBtnText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#888' }
});