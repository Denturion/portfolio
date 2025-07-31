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

				<main className='w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-10'>
					<section
						id='hero'
						className='min-h-screen flex flex-col md:flex-row items-center justify-center py-10 px-5 pt-24 md:pt-0'
					>
						<Hero />
					</section>

					<section
						id='about'
						className='min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-5'
					>
						<About />
					</section>

					<section
						id='skills'
						className='min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-5'
					>
						<Skills />
					</section>

					<section
						id='projects'
						className='min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-5'
					>
						<Projects />
					</section>

					<section
						id='contact'
						className='min-h-screen flex flex-col md:flex-row items-center justify-center py-16 px-5'
					>
						<Contact />
					</section>
				</main>
				<Footer />
			</div>
		</>
	);
}
