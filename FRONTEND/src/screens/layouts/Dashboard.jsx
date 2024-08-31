import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
	return (
		<>
			<main className="flex min-h-screen md:flex-row flex-col">
				<nav className="bg-[url('https://i.gifer.com/QFNv.gif')] flex flex-col items-center bg-cover bg-center md:w-1/5 w-full">
					<img className="max-w-36 pt-10" src="/images/tech.png" alt="" />
					<h2 className="text-white text-center font-bold text-3xl md:mb-20 mb-5">
						Dashboard
					</h2>
					<ul className="flex flex-col justify-center text-white gap-5 w-full text-start px-12 items-center">
						<li>
							<Link
								to="/dashboard/clientes"
								className="text-2xl flex items-center gap-3"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
									<path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
									<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									<path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
								</svg>
								Clientes
							</Link>
						</li>
						<li>
							<Link
								to="/dashboard/tecnicos"
								className="text-2xl flex items-center gap-3"
							>
								<svg
									className="*:stroke-white"
									width="24"
									height="24"
									viewBox="0 0 512 417"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M437 136a27 27 0 0 1-39 0l-22-22a27 27 0 0 1 0-39l51-51a1 1 0 0 0 0-1c-33-14-76-7-103 20-26 26-27 64-18 98a27 27 0 0 1-7 27L126 329a41 41 0 1 0 57 57l162-173a27 27 0 0 1 27-8c33 9 71 8 97-17a98 98 0 0 0 20-103 1 1 0 0 0-1 0l-51 51Z"
										stroke="#000"
										strokeWidth="30"
										strokeMiterlimit="10"
										strokeLinecap="round"
									/>
									<path
										d="m224 236-31-30a18 18 0 0 1 0-26l16-16 5-3a18 18 0 0 1 20 3l34 33m49 46a3908 3908 0 0 0 114 104 13 13 0 0 1-3 16l-33 33a14 14 0 0 1-21-1c-16-19-61-67-99-107"
										stroke="#000"
										strokeWidth="30"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="m17 146 30-29a5 5 0 0 1 3-2l4 2a10 10 0 0 0 8 3c4-1 8-2 10-5 6-5-1-17 5-24a207 207 0 0 1 89-67c13-5 27-8 41-8 22 0 40 10 46 16l10 11-9-2c-7-2-13-2-20-2-13 1-29 8-38 14-14 11-20 26-21 45 0 14 3 22 36 55a7 7 0 0 1 0 10l-18 18a7 7 0 0 1-10 0c-22-22-36-33-45-38-8-5-15-7-18-7-6-1-13 0-18 4l-3 2a14 14 0 0 0 0 20l2 1a5 5 0 0 1 0 7l-29 29a5 5 0 0 1-4 1l-3-1-48-47a5 5 0 0 1 0-6Z"
										stroke="#000"
										strokeWidth="30"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Tecnicos
							</Link>
						</li>
						<li>
							<Link
								to="/dashboard/tickets"
								className="text-2xl flex items-center gap-3 "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M15 5l0 2" />
									<path d="M15 11l0 2" />
									<path d="M15 17l0 2" />
									<path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
								</svg>
								Tickets
							</Link>
						</li>
					</ul>
				</nav>
				<section className="bg-[url('https://i.pinimg.com/originals/c5/57/87/c55787da666ebdeb8906de1fec1c70df.jpg')] bg-cover bg-center border border-white shadow-white shadow-inner flex flex-col justify-center items-center relative gap-5 md:w-4/5 w-full">
					<Outlet />
				</section>
			</main>
		</>
	);
}
