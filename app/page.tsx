import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import landingPic from "public/V10-1.jpg";

export default function Home() {
	return (
		
		<section className="flex flex-col  justify-evenly gap-12">
			{/* <section className="bg-white dark:bg-gray-900 flex flex-row rounded-lg bg-opacity-10">
					<div className="place-self-center mr-auto lg:col-span-7 py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16">
						<h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">New 2 litre V10</h1>
						<p className="mb-6 max-w-2xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-bold">We are about to start dyno testing this engine at Villiers!</p>
						<p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg dark:text-gray-400">The much anticipated compact V10 engine is due to power a range of exciting new vehicles from sister companies Connaught and Levis.
						Villiers are developing this unique narrow angle engine in conjunction with an ex F1 engineer and is expected to rev up to 13,000 rpm</p>
						<a href="#" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
							More information
							<svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
					<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<Image
						src={landingPic}
						alt="V10 Image"
					/>
					</div>                
			</section>

			<section className="bg-white dark:bg-gray-900 flex flex-row rounded-lg bg-opacity-10">
					<div className="place-self-center mr-auto lg:col-span-7 py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16">
						<h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">New 1.2 litre V6</h1>
					
						<p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg dark:text-gray-400">Derived from the 2 litre V10, Villiers new compact V6 engine is nearing prototype stage. Its been developed by the same team as the V10 and is due to power a range of Levis motorcycles.</p>
						<a href="#" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
							More information
							<svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
						</a>
					</div>
					<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
					<Image
						src={landingPic}
						alt="V10 Image"
					/>
					</div>                
			</section> */}

			

			<div data-hs-carousel='{
				"loadingClasses": "opacity-0",
				"isAutoPlay": true
			}' className="relative">
			<div className="hs-carousel relative overflow-hidden w-full min-h-[550px] bg-white rounded-lg">
				<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
				<div className="hs-carousel-slide">
					<span className="bg-white dark:bg-gray-900 flex flex-row rounded-lg bg-opacity-10">
						<div className="place-self-center mr-auto lg:col-span-7 py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16">
							<h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">New 2 litre V10</h1>
							<p className="mb-6 max-w-2xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 font-bold">We are about to start dyno testing this engine at Villiers!</p>
							<p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg dark:text-gray-400">The much anticipated compact V10 engine is due to power a range of exciting new vehicles from sister companies Connaught and Levis.
							Villiers are developing this unique narrow angle engine in conjunction with an ex F1 engineer and is expected to rev up to 13,000 rpm</p>
							<a href="#" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
								More information
								<svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</a>
						</div>
						<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<Image
							src={landingPic}
							alt="V10 Image"
						/>
						</div>                
					</span>
				</div>
				<div className="hs-carousel-slide">
					<span className="bg-white dark:bg-gray-900 flex flex-row rounded-lg bg-opacity-10">
						<div className="place-self-center mr-auto lg:col-span-7 py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16">
							<h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">New 1.2 litre V6</h1>
						
							<p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-md lg:text-lg dark:text-gray-400">Derived from the 2 litre V10, Villiers new compact V6 engine is nearing prototype stage. Its been developed by the same team as the V10 and is due to power a range of Levis motorcycles.</p>
							<a href="#" className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
								More information
								<svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</a>
						</div>
						<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<Image
							src={landingPic}
							alt="V10 Image"
						/>
						</div>                
					</span>
				</div>
				<div className="hs-carousel-slide">
					<div className="flex justify-center h-full bg-gray-300 p-6">
					<span className="self-center text-4xl transition duration-700">Third slide</span>
					</div>
				</div>
				</div>
			</div>

			<button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
				<span className="text-2xl" aria-hidden="true">
				<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
				</svg>
				</span>
				<span className="sr-only">Previous</span>
			</button>
			<button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
				<span className="sr-only">Next</span>
				<span className="text-2xl" aria-hidden="true">
				<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
				</svg>
				</span>
			</button>

			<div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
				<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
				<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
				<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
			</div>
			</div>

		</section>
	);
}
