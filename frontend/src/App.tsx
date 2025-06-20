import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './layout/Footer';
import Header from './layout/Header';

export default function App() {
	return (
		<>
			<div
				className={`bg-background-light text-text-light font-light dark:bg-background-dark dark:font-dark dark:text-text-dark transition-colors duration-300`}
			>
				<Header />

				<main>
					<section
						id='hero'
						className='min-h-screen flex items-center justify-center'
					>
						<Hero />
					</section>

					<section
						id='about'
						className='min-h-screen flex items-center justify-center'
					>
						<About />
					</section>

					<section
						id='skills'
						className='min-h-screen flex items-center justify-center'
					>
						<Skills />
					</section>

					<section
						id='projects'
						className='min-h-screen flex items-center justify-center'
					>
						<Projects />
					</section>

					<section
						id='contact'
						className='min-h-screen flex items-center justify-center'
					>
						<Contact />
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}
