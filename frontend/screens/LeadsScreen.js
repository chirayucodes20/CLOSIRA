import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import data from '../mock/data.json';
import { LeadCard } from '../components/LeadCard';

export default function LeadsScreen({ navigation }) {
  const renderEmpty = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyText}>You're all caught up! No new leads right now.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.leads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LeadCard 
            lead={item} 
            // Navigation to Conversation Detail screen on tap
            onPress={() => navigation.navigate('ConversationDetail', { lead: item })} 
          />
        )}
        contentContainerStyle={{ padding: 16, flexGrow: 1 }}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
  emptyText: { color: '#666', fontSize: 16 }
});