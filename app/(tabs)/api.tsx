import { View, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';

// Define an interface for the fetched data
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Api() {
  const [data, setData] = useState<Post | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json: Post) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.body}>{data.body}</Text>
          <Text style={styles.userId}>User ID: {data.userId}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
  },
  userId: {
    fontSize: 14,
    color: 'gray',
  },
});



///////////////////////////////////

// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import React, { useState, useEffect } from 'react';

// // Define an interface for a single post
// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// export default function Api() {
//   const [data, setData] = useState<Post[]>([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((json: Post[]) => setData(json))
//       .catch((error) => console.error(error));
//   }, []);

//   const renderItem = ({ item }: { item: Post }) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.body}>{item.body}</Text>
//       <Text style={styles.userId}>User ID: {item.userId}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {data.length > 0 ? (
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   itemContainer: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   body: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   userId: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });

