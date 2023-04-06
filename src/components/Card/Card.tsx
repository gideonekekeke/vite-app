import { createStyles, getStylesRef, rem, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	wrapper: {
		backgroundColor: theme.colors.silver[0],
	},
}));

const Card = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.wrapper}>
			<div>createStyles demo</div>
			<Button>Lets start</Button>
		</div>
	);
};

export default Card;

// const Container = createStyles()
