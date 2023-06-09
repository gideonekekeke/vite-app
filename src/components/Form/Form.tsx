import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
	TextInput,
	PasswordInput,
	Text,
	Paper,
	Group,
	PaperProps,
	Button,
	Divider,
	Checkbox,
	Anchor,
	Stack,
} from "@mantine/core";
import { LoginUser, registerUser } from "../../utils/api";
import React from 'react'

// import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";

const Form = () => {
	const [type, toggle] = useToggle(["login", "register"]);
	const [loading, setLoading] = React.useState<boolean>(false)
	const form = useForm({
		initialValues: {
			email: "",
			name: "",
			password: "",
			terms: true,
		},

		// validate: {
		// email: (val: any) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
		// password: (val: any) =>
		// val.length <= 6
		// ? "Password should include at least 6 characters"
		// : null,
		// },
	});

	// const regUser = async () => {
	// const res = await registerUser({
	// name: form.values.name,
	// email: form.values.email,
	// password: form.values.password,
	// });
	// console.log(res);
	// };

	type IUser = {
		name: string;
		email: string;
		password: string;
	};

	const OnRegister = async () => {
		setLoading(true)
		const { name, email, password } = form.values;
		const payload: IUser = {
			name,
			email,
			password,
		};

		try {
			const response = await registerUser(payload);
			console.log(response);
			
		} catch (err) {
			console.log(err);
		}finally{
			setLoading(false)
		}
	};

	const OnLogin = async () => {
		const res = LoginUser({
			email: form.values.email,
			password: form.values.password,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (type === "register") {
			console.log("submitted");
			OnRegister();
		} else {
			console.log("sub");
			OnLogin();
		}
	};

	const OnGoogleSignUp = () => {
		window.open("http://localhost:1400/auth/google", "_self");
	};

	const OnGithubSignUp = () => {
		window.open("http://localhost:1400/auth/github", "_self");
	};

	return (
		<Paper
			style={{
				width: "400px",
			}}
			radius='md'
			p='xl'
			withBorder={true}>
			<Text size='lg' weight={500}>
				Welcome to mySevice, {type} with
			</Text>

			<Group grow mb='md' mt='md'>
				<Button onClick={OnGoogleSignUp} radius='xl'>
					Google
				</Button>
				<Button onClick={OnGithubSignUp} radius='xl'>
					Github
				</Button>
			</Group>

			<Divider label='Or continue with email' labelPosition='center' my='lg' />

			<form onSubmit={handleSubmit}>
				<Stack>
					{type === "register" && (
						<TextInput
							label='Name'
							placeholder='Your name'
							value={form.values.name}
							onChange={(event) =>
								form.setFieldValue("name", event.currentTarget.value)
							}
							radius='md'
						/>
					)}

					<TextInput
						required
						label='Email'
						placeholder='hello@mantine.dev'
						value={form.values.email}
						onChange={(event) =>
							form.setFieldValue("email", event.currentTarget.value)
						}
						error={form.errors.email && "Invalid email"}
						radius='md'
					/>

					<PasswordInput
						required
						label='Password'
						placeholder='Your password'
						value={form.values.password}
						onChange={(event) =>
							form.setFieldValue("password", event.currentTarget.value)
						}
						error={
							form.errors.password &&
							"Password should include at least 6 characters"
						}
						radius='md'
					/>

					{type === "register" && (
						<Checkbox
							label='I accept terms and conditions'
							checked={form.values.terms}
							onChange={(event) =>
								form.setFieldValue("terms", event.currentTarget.checked)
							}
						/>
					)}
				</Stack>

				<Group position='apart' mt='xl'>
					<Anchor
						component='button'
						type='button'
						color='dimmed'
						onClick={() => toggle()}
						size='xs'>
						{type === "register"
							? "Already have an account? Login"
							: "Don't have an account? Register"}
					</Anchor>
					<Button type='submit' radius='xl'>
						{upperFirst(type)}
					</Button>
				</Group>
			</form>
		</Paper>
	);
};

export default Form;
