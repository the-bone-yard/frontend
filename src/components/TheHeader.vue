<template>
	<section>
		<article class="bone-yard-header">
			<router-link to="/">
				<img
					class="bone-yard-logo"
					alt="Bone Yard pawprint logo"
					src="../assets/paw_prints.png"
				/>
			</router-link>
			<router-link to="/" class="title-link">
				<h1 class="bone-yard-font">The<br />Bone Yard</h1>
			</router-link>
		</article>
		<nav>
			<router-link to="/my-parks">My Parks</router-link>
			<router-link to="/results">Search For Parks</router-link>
		</nav>
	</section>
</template>

<style lang="scss" scoped>
.bone-yard-header {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em;

	.bone-yard-logo {
		width: 2.5em;
		height: 100%;
		margin-right: 1em;
	}

	.bone-yard-font {
		font-family: 'Potta One', cursive;
		line-height: 1.2em;
	}

	.title-link {
		text-decoration: none;
		color: black;
	}
}

nav {
	a {
		margin-right: 0.7em;
		text-decoration: none;
		color: #03363d;
		padding: 0.5em;

		&:hover {
			background-color: #03363d;
			color: #f8f9f9;
		}
	}
}
</style>
