import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Text,
  ActivityIndicator,
  Button,
  TextInput,
} from 'react-native';

export const Networking = () => {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (limit: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
    } catch (e) {
      console.log(`Error: fetching data ${e}`);
      setIsLoading(false);
      setError('Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData(10);
  }, []);
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };
  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: postTitle, body: postBody }),
        }
      );
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle('');
      setPostBody('');
    } catch (e) {
      console.log(`Error: posting data ${e}`);
      setError('Failed to post data');
    }
    setIsPosting(false);
  };
  return (
    <>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" />
          <Text style={{ textAlign: 'center' }}>Loading...</Text>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Post Title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Post Body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? 'Adding...' : 'Add Post'}
              onPress={addPost}
              disabled={isPosting || !postTitle || !postBody}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.nameText}>{item.title}</Text>
                  <Text style={styles.typeText}>{item.body}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
              ListEmptyComponent={<Text>No Posts Found</Text>}
              ListHeaderComponent={
                <Text style={styles.headerText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              refreshing={refresh}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center', // Center the loading spinner
    alignItems: 'center', // Center the loading spinner
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: '#666666',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: '#FFC0CB',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#D8000C',
    fontSize: 16,
    textAlign: 'center',
  },
});
