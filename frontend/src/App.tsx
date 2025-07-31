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

				<main className='w-full max-w-4xl mx-auto px-10'>
					<section
						id='hero'
						className='h-screen flex items-center justify-center'
					>
						<Hero />
					</section>

					<section
						id='about'
						className='h-screen flex items-center justify-center'
					>
						<About />
					</section>

					<section
						id='skills'
						className='h-screen flex items-center justify-center'
					>
						<Skills />
					</section>

					<section
						id='projects'
						className='h-screen flex items-center justify-center'
					>
						<Projects />
					</section>

					<section
						id='contact'
						className='h-screen flex items-center justify-center'
					>
						<Contact />
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}
