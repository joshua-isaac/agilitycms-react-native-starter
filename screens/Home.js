import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native';
import { GET_RECIPES } from '../utils/getRecipes';
import { useQuery } from "@apollo/client";

const win = Dimensions.get('window');

const Home = ({ navigation }) => {

    const { loading, error, data } = useQuery(GET_RECIPES);

    console.log(error)

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Something went wrong...</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {data?.recipes && data?.recipes.map((recipe, index) => {
                return (
                    <View key={index} style={styles.recipe}>
                        <Image source={{ uri: recipe.fields.image.url }} style={styles.image} />
                        <Text style={styles.title}>{recipe.fields.title}</Text>
                        <Button
                            title="Go to Recipe"
                            onPress={() => navigation.navigate('Recipe', {
                                recipeId: recipe.contentID
                            })}
                        />

                    </View>
                )
            })}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    recipe: {
        marginBottom: 40
    },
    title: {
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 20
    },
    image: {
        width: win.width,
        height: 250,
    }
});
