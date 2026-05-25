import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import data from '../mock/data.json';

export default function FollowUpsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.followUps}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.name}>{item.customer}</Text>
              <Text style={styles.time}>Due: {new Date(item.dueTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
            </View>
            <Text style={styles.preview}>"{item.messagePreview}"</Text>
            <TouchableOpacity style={styles.doneBtn}>
              <Text style={styles.doneBtnText}>Mark as Done</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={<Text style={styles.emptyText}>No follow-ups scheduled.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 12, elevation: 1, borderWidth: 1, borderColor: '#eee' },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  time: { fontSize: 12, color: '#0056b3', fontWeight: 'bold' },
  preview: { fontSize: 14, color: '#666', fontStyle: 'italic', marginBottom: 12 },
  doneBtn: { backgroundColor: '#007bff', padding: 10, borderRadius: 6, alignItems: 'center' },
  doneBtnText: { color: '#fff', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#888' }
});