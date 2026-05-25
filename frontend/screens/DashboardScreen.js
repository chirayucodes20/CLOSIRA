import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import data from '../mock/data.json';

export default function DashboardScreen() {
  const stats = data.summaryStats;

  return (
    <ScrollView style={styles.container}>
      {/* Wrapper to keep it looking good even on wide web screens */}
      <View style={styles.webWrapper}>
        <Text style={styles.header}>Today's Overview</Text>
        
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, {color: '#3b82f6'}]}>{stats.totalLeadsToday}</Text>
            <Text style={styles.statLabel}>Total Leads</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, {color: '#ef4444'}]}>{stats.missedEnquiries}</Text>
            <Text style={styles.statLabel}>Missed</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, {color: '#f59e0b'}]}>{stats.openEscalations}</Text>
            <Text style={styles.statLabel}>Escalations</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statValue, {color: '#10b981'}]}>{stats.followUpsDue}</Text>
            <Text style={styles.statLabel}>Follow-ups</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Activity Feed</Text>
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>✨ You're all caught up! No recent activity.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f1f5f9', // Softer, premium background color
    padding: 16 
  },
  webWrapper: {
    maxWidth: 500, // This stops the UI from stretching on your laptop
    width: '100%',
    alignSelf: 'center'
  },
  header: { 
    fontSize: 26, 
    fontWeight: '900', 
    marginBottom: 20, 
    color: '#0f172a',
    letterSpacing: -0.5
  },
  statsGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-between' 
  },
  statCard: { 
    width: '48%', 
    backgroundColor: 'white', 
    paddingVertical: 24,
    paddingHorizontal: 16, 
    borderRadius: 16, // Smoother rounded corners
    marginBottom: 16, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    // Premium soft shadow effects
    elevation: 4, 
    shadowColor: '#64748b', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 12,
  },
  statValue: { 
    fontSize: 34, 
    fontWeight: '900', 
    marginBottom: 4 
  },
  statLabel: { 
    fontSize: 14, 
    color: '#64748b', 
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '800', 
    marginTop: 16, 
    marginBottom: 16,
    color: '#1e293b'
  },
  emptyState: { 
    padding: 30, 
    alignItems: 'center', 
    backgroundColor: '#ffffff', 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed'
  },
  emptyText: { 
    color: '#94a3b8', 
    fontStyle: 'italic',
    fontWeight: '500'
  }
});