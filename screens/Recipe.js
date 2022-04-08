import { View, ScrollView, Text, Image, Dimensions, StyleSheet } from "react-native"
import { useQuery, gql } from "@apollo/client";
import { GET_RECIPE } from "../utils/getRecipe";

const win = Dimensions.get('window');

const Recipe = ({ route, navigation }) => {

	const { recipeId } = route.params;

	const { loading, error, data } = useQuery(GET_RECIPE, {
		variables: { recipeId }
	});

	const recipe = data?.recipes[0];

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
				<Text>Error</Text>
			</View>
		)
	}

	return (
		<ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
			<Image source={{ uri: recipe.fields.image.url }} style={styles.image} />
			<View style={styles.container}>
				<Text style={styles.title}>{recipe.fields.title}</Text>
				<Text>{recipe.fields.timeToCook} Mins</Text>
				<View style={styles.section}>
					<Text style={styles.subTitle}>Tools</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						{recipe && recipe?.fields.tools?.map((tool, index) => {
							return (
								<View key={index} style={{ marginHorizontal: 15}}>
									<Image source={{ uri: tool.fields.image.url }} style={styles.toolImage} />
									<Text style={{ textAlign: 'center', marginTop: 8 }}>{tool.fields.title}</Text>
								</View>
							)
						})}
					</ScrollView>
				</View>
				<View style={styles.section}>
					<Text style={styles.subTitle}>Ingredients</Text>
					{recipe && recipe?.fields.ingredients?.map((ingredient, index) => {
						return (
							<View key={index}>
								<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
									<View style={{ width: 4, height: 4, backgroundColor: '#000', marginRight: 10, borderRadius: 100 }} />
									<Text>{ingredient.fields.ingredient}</Text>
								</View>
							</View>
						)
					})}
				</View>
				<View style={styles.section}>
					<Text style={styles.subTitle}>Steps</Text>
					{recipe && recipe?.fields.steps?.map((step, index) => {
						return (
							<View key={index} style={{ marginBottom: 20 }}>
								<Text style={{ marginBottom: 8}}>Step {index + 1}</Text>
								<Text>{step.fields.step}</Text>
							</View>
						)
					})}
				</View>
			</View>
		</ScrollView>
	)
}

export default Recipe

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20
	},
	recipe: {
		marginBottom: 40
	},
	image: {
		width: win.width,
		height: 320,
		marginBottom: 10
	},
	title: {
		fontSize: 25,
		fontWeight: '500',
		marginVertical: 10
	},
	section: {
		marginVertical: 25
	},
	subTitle: {
		fontSize: 20,
		marginBottom: 12
	},
	toolImage: {
		width: 150,
		height: 150
	}
});
