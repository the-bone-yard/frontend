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
			<router-link to="/">Home</router-link>
			<router-link to="/my-parks">My Parks</router-link>
			<router-link to="/results">View Results</router-link>
		</nav>
	</section>
</template>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
@import '../styles/_mixins.scss';
section {
	background-color: $dark-green;
	filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));

	.bone-yard-header {
		@include customDisplayFlex();
		justify-content: center;
		align-items: center;

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
			color: white;
		}
	}

	nav {
		padding-bottom: .5rem;

		a {
			margin-right: 0.7em;
			text-decoration: none;
			color: #fff;
			padding: 0.5em;

			&:hover {
				@include button-white-hover;
			}
		}
	}
}
</style>
