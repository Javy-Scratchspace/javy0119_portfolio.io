const enableDetailProfiles = true;

const detailProfileVisibility = {
	experience: {
		"well-bilt": true,
		"code-meets-bagel": true,
		"lockheed-martin": true
	},
	research: {
		"fsu-young-scholars": true,
		"opa": true,
		"asrl": true,
		"nanoelectronics": true,
		"perl": true
	},
	project: {
		"kxr": true,
		"baja-sae": true,
		"shpe": true,
		"solid-propellant": true,
		"digital-ad-ai": true,
		"electric-generator": true,
		"robotic-arm": true,
		"physics-calculator": true,
		"data-visualization": true,
		"c-programs": true,
		"discord-ai-bot": true
	}
};

const experienceDetails = {
	"well-bilt": {
		title: "Engineering Intern - Well Bilt Industries",
		logo: "reference_files/WellBiltLogo.png",
        intro: "This internship focused on building hangar doors and developing tools to help engineers. During this internship, I worked with SolidWorks to generate drawings, Risa to conduct analyses that determine if the door panels can withstand wind loads, python to build automation tools, Beamline to generate commands for machines to drill out hangar door beams, and Messer Nesting to develop laser cut metal parts. I worked with customers and Engineers to ensure that the product is delivered in a satisfactory way, ensuring that not only the technical requirements were met, but also the desired layout of the project is handled properly.",
        facts: [
			["Role", "Engineering Intern"],
			["Focus Areas", "Python automation, RISA modeling, SolidWorks drawings, manufacturing support."],
			["Main Impact Points", "Developed Python automation tools that reduced time to produce cut lists for client projects by 47%.", "Worked on client project models using SolidWorks and developed manufacturing-ready drawings.", "Worked with Engineers and clients to ensure satisfaction across all fields.", "Assisted in the manufacturing of laser cut parts and beams by producing files that assist machines in producing these parts, reducing time to produce client requests by 12%."]
		],
		panels: [
			["Problem", "Clients building their hangars need doors capable of withstanding the thermal stresses and wind speeds quoted for their location."],
			["Approach", "SolidWorks: Build hangar door models to develop manufacturing-ready drawings.", "Beamline: Produce files that give orders to machine on where to drill holes to attach clips.", "Messer Nesting: Make laser cut metal parts that are used for clips for connecting hangar doors and other parts that are helpful for helping employees keep track of material."],
			["Result", "Clients get satisfied results that are long-term affordable solutions in reduced time."]
		],
		visuals: [
			{ image: "reference_files/Python Cut List.jpeg", alt: "Python cut list automation example", caption: "Automated cut list program that displays the results after performing a merge and split of beam orders to maintain beam length orders (normally 20') and ensure all materials are ordered." },
			{ image: "reference_files/General Door Calcs Excel Sheet.jpeg", alt: "Excel door calculation sheet example", caption: "Developed an Excel database that takes in door dimensions and panel count and spits out the Risa file best used to copy from. Also conducts calculations given wind speed and determines if the panel with the dimensions can handle the stresses." },
			{ image: "reference_files/Risa Strctural Analysis.jpeg", alt: "Risa Structural Analysis grid points example", caption: "Example of hangar door via Risa Structural Analysis program. These grid points define beam connections where beams are connected via clips. The software produces a visual that shows the doors weakest and strongest points." },
            { image: "reference_files/WellBiltFinalResult.png", alt: "Final Door Design Example", caption: "Example of a biparting hangar door being finally built."}
		],
		timeline: [
			["Build", "Use Risa to ensure hangar door beams handle the wind loads with a sufficient safety factor of 10, SolidWorks to develop the drawings and ensure fast manufacturing processes, and Excel to develop cut lists necessary for building hangar doors."],
			["Validation", "Validated Risa calculations by determining wind loads at the center point of each door frame and hand calculating the deflections."],
			["Takeaway", "I learned how to take a design from concept to reality. I was able to assist and expedite the design and manufacturing processes for building client solutions while also building automation tools that assist engineers in purchasing materials by reducing time to generate cut lists by 47%."]
		]
	},
	"code-meets-bagel": {
		title: "Software Developer - Code Meets Bagel",
        logo: "reference_files/cmb.jpg",
        intro: "As an intern for Code Meets Bagel, I focused on developing proper documentation for an AI Slack Bot. I also helped in the development and testing of the AI. The purpose of this bot was to help a marketing team build marketing solution by integrating AI with other marketing software platforms.",
		facts: [
			["Role", "Software Developer"],
			["Focus Areas", "Python, Slack bot development, Claude/OpenAI APIs, GitHub workflows, deployment."],
			["Main Impact Points", "Managed testing infrastructure across several different Slack bots.", "Handled hierarchy of Slack bot communication.", "Implemented a method to decrease token usage by 11%."]
		],
		panels: [
			["Problem", "A marketing team needed a bot that was capable of producing ads based on team requests."],
			["Approach", "Slack: The framework where the bots were developed. Here, team members could interact with different bots and make requests for ad generation. The bot would develop a response and our program would parse it to determine what task was needed to be completed and how.", "OpenAI/Claude API: Used to handle bot queries to large language AI models (LLM).", "Python: The language that the Slack bots were built on. Using Python, I was able to develop test files that would test for different scenarios that the marketing team would come up with. Several runs were conducted to see what prompt would be most beneficial for explaining the role to the AI."],
			["Result", "A Slack bot integrated with AI that's capable of handling consumer queries and breaking down what needs are to be met, how they need to be met, and what commands must be called."]
		],
		visuals: [
        ],
		timeline: [
			["Build", "Create a simple bot within Slack capable of handling user mentions. Then, integrate the bot with AI so that the bot can handle regular conversations with a human."],
			["Validation", "To validate, simply set up tests that are common scenarios for the team and run it with either different role descriptions or prompting that is said different but conveys the same message to understand how the bot will react and what the best response is."],
			["Takeaway", "This experience was my introduction to API calls. Thanks to this experience, I not only understand how API calls work, but can also use this information to build software that requires outsourcing of data or making calls to an AI. I was able to successfully build my own AI Discord chat bot that helps me with homework and general queries."]
		]
	},
	"lockheed-martin": {
		title: "Systems Engineer - Lockheed Martin",
		logo: "reference_files/lm_logo.jpg",
		intro: "As a Systems Engineer with Lockheed Martin working under the ARISE Modeling Based Systems Engineering (MBSE) team, I focused on using Cameo to model stakeholder projects and Python to build automation projects within Cameo. I used Regex and AI based parsing to build a plugin that can parse code files for different project requirements. I implemented several methodologies and data structures to help automate the search and retrieval process of Cameo packages and GitLab files. Overall, I helped increase the productivity of the team members and of the stakeholders.",
		facts: [
			["Role", "Systems Engineer"],
			["Focus Areas", "Cameo Systems Modeler, plugin development, Python backend logic, C++ simulation review."],
			["Main Impact Points", "Enhanced in-house Cameo plugins to automate Engineering Processes using Python, reducing model generation and simulation timeframes from days to hours.", "Assisted in the generation of models using Cameo Systems Modeler that demonstrate project simulations.", "Implemented several CS concepts that reduced human error by allowing the program to conduct searches for packages and GitLab files, reducing model error by 37%.", "Testing different regular expression (regex) methods that capture desired parameters more accurately, increasing coverage of parameters by 25%.", "Implemented AI-based parsing to improve regex parsing, allowing for the plugin to adhere to different coding standard, improving parsing flexibility, and increasing accuracy of capturing parameters."]
		],
		panels: [
			["Problem", "Other programs within Lockheed Martin need a way to model their projects such that others can read it well and it accurately describes what the project is focused on."],
			["Approach", "Cameo Systems Modeler: Demonstrates how each part functions within a system and provides a friendly interface to model project integration.", "Jython: A mixture of Java and Python that works within Cameo. It's used to automate the Python-based framework.", "Consistently update the GitLab so that you and your peers can work alongside each other."],
			["Result", "Improved plugin workflows, reduced model-generation and simulation timeframes from days to hours, and helped reduce model error by automating searches across Cameo packages and GitLab files."]
		],
		visuals: [
			{ image: "reference_files/Python Logo.png", alt: "Python Logo", caption: "Python language was used to develop in-house plugins for other projects." },
			{ image: "reference_files/CameoExample.png", alt: "Sample Cameo Pic", caption: "This is a sample project that models the components of a system and how they operate with each other." },
		],
		timeline: [
			["Build", "Built and assisted in the development of several plugins. Implemented different computer science techniques to help automate the process and reduce human error."],
			["Validation", "Underwent testing phases for different plugins, provided feedback on testing, and handled AI conversations such that I optimized a prompt that reduces the token usage."],
			["Takeaway", "Working for Lockheed Martin provided an insight into how the industry handles product development and testing. Throughout my time with my team, I have been needed to develop several documents that go into detail on what the plugin is and does and how the plugin works."]
		]
	}
};

const researchDetails = {
	"fsu-young-scholars": {
		title: "FSU Young Scholars Program",
		logo: "reference_files/FSU_LOGO.png",
		intro: "Through the FSU Young Scholars Program, I studied perovskite materials for LED applications under Professor Biwu Ma. The work focused on synthesizing DMEDA Lead(II) Bromide, learning materials characterization techniques, and presenting the research through a poster that explained the material structure and photophysical motivation.",
		facts: [
			["Research Area", "Perovskites, materials science, and LED applications."],
			["Mentor / Lab", "Professor Biwu Ma, Biochemistry Department."],
			["Main Impact Points", "Learned X-ray diffraction techniques.", "Developed skills in Python data analysis.", "Learned basics on quantum computing."]
		],
		panels: [
			["Research Question", "Light-emitting diodes (LED's) have become popular as of recently due to their applications in light emissions. Specifically, they have more economic benefits and an increased lifespan when compared to modern day fluorescent lights. The goal was to synthesize DMEDA Lead(II) Bromide to make one-dimensional organic metal halide hybrid with edge-sharing octahedrons and study its structural and photophysical properties."],
			["Methods", "Manufacture these perovskites using the vapor diffusion method.", "Crush crystals to a fine powder to avoid impurities.", "Conduct Single Crystal X-Ray Diffraction (SXRD) to study the structure of the material."],
			["Outcome", "Presented the research findings through a poster, strengthened my understanding of materials characterization, and built a foundation in Python-based data analysis and quantum concepts that supported later technical work."]
		],
		visuals: [
			{ image: "reference_files/IRP_Poster_Photo.jpg", alt: "FSU research poster presentation", caption: "Presented my poster on one dimensional organic metal halide hybrid perovskites." },
			{ image: "reference_files/Me n Jarek.jpeg", alt: "In the lab with a fellow researcher", caption: "Me with my mentor Jarek." },
			{ image: "reference_files/FSU_POSTER.png", caption: "Full poster on research conducted related to manufacturing white LED's." },
            { image: "reference_files/ColorGraph.png", caption: "Color graph representing color emission and emission wavelength of DMEDA Lead(II) Bromide." },
            { image: "reference_files/VaporDiffusionProcess.png", caption: "Visual that represents the manufacturing process to produce perovskites." },
            { image: "reference_files/Vapor Method.jpeg", caption: "Real image of the capsules that were left overnight so that the procurement process for these perovskites would happen." },
            { image: "reference_files/CIECoordinates.png", caption: "Commission Internationale de l'Eclairage (International Commission on Illumination) (CIE) coordinates for DMEDA Lead(II) Bromide. These coordinates help characterize the amount of light energy in the visible spectrum weighted by the human eye's spectral sensitivity."},
            { image: "reference_files/OneDimensionalCrystal.png", caption: "Example view of DMEDA Lead(II) Bromide at a molecular level. Vespa was used to produce the image of this crystal. This structure demonstrates one-dimensional structure since the structure is only stretching across one direction."}
		],       
		timeline: [
			["Context", "Joined the FSU Young Scholars Program and worked in Professor Biwu Ma's lab studying perovskite materials for LED applications."],
			["Experiment", "Synthesized DMEDA Lead(II) Bromide using vapor diffusion, prepared crystal samples, and studied structure using X-ray diffraction methods."],
			["Presentation", "Built and presented a research poster explaining the material structure, color-emission behavior, and LED motivation behind the project."],
			["Takeaway", "Gained early research experience in materials science, lab procedure, technical communication, Python data analysis, and quantum-related concepts."]
		]
	},
	"opa": {
		title: "Original Polyoculus Assembly (OPA)",
		logo: "",
		intro: "In the Original Polyoculus Assembly research effort, I supported telescope assembly work in UCF CREOL by contributing to roof concepts and support-structure planning for the deployed enclosure. The work connected mechanical design decisions with the constraints of protecting and operating an optical system.",
		facts: [
			["Research Area", "Astrophysics, optics, photonics, and mechanical design."],
			["Mentor / Lab", "Professor Eikenberry, CREOL Department at UCF."],
			["Main Impact Points", "Supported roof concept development for the telescope assembly enclosure.", "Assisted with support-structure planning around deployment and protection constraints.", "Applied CAD and mechanical design thinking to an optics-related research system."]
		],
		panels: [
			["Problem", "The telescope assembly needed an enclosure and roof concept that could support deployment while protecting sensitive optical hardware from environmental and structural issues."],
			["Approach", "Used CAD and mechanical design planning to think through roof geometry, enclosure fit, support-structure needs, and the practical constraints of deploying a telescope assembly from a protected container."],
			["Result", "The design support helped clarify how the roof and support structure could fit into the larger assembly, giving the research team a clearer mechanical path for the deployed enclosure concept."]
		],
		visuals: [
			{ image: "reference_files/Eikenberry Connex Box.jpg", alt: "OPA telescoping assembly connex enclosure", caption: "Connex enclosure used as part of the telescope assembly planning and protection concept." },
			{ image: "reference_files/EikenberryConnex.png", alt: "OPA design render", caption: "Design render showing the enclosure concept and how roof or deployment features could integrate with the assembly." },
			{ placeholder: "Roof support concept", caption: "Concept slot for showing how the roof, supports, and deployed telescope assembly relate mechanically." }
		],
		timeline: [
			["Context", "Supported an optics research project where the mechanical enclosure had to protect and support telescope assembly operation."],
			["Design", "Worked through roof and support-structure ideas while considering deployment, enclosure space, and practical CAD constraints."],
			["Review", "Used the design work to help communicate possible enclosure paths and support future iteration."],
			["Takeaway", "Learned how mechanical design decisions support optics and photonics research hardware."]
		]
	},
	"asrl": {
		title: "Astrodynamics, Space, and Robotics Lab (ASRL)",
		logo: "",
		intro: "In ASRL, I worked under Professor Elgohary on orbital path efficiency research using ROSS and supported lab hardware through electronics housing drawings. This experience combined aerospace analysis tools with practical design documentation for research hardware.",
		facts: [
			["Research Area", "Astrodynamics, orbital path efficiency, robotics support hardware."],
			["Mentor / Lab", "Professor Elgohary, Aerospace Engineering Department at UCF."],
			["Main Impact Points", "Used ROSS in support of orbital path efficiency research.", "Assisted with electronics housing drawings for lab hardware.", "Connected analysis-focused research with mechanical documentation and hardware support."]
		],
		panels: [
			["Problem", "Orbital path efficiency research requires reliable analysis workflows, while lab hardware also needs clear housing drawings so electronics can be protected, mounted, and revised."],
			["Approach", "Used ROSS to support orbital path efficiency research while also helping translate hardware needs into electronics housing drawings and design documentation."],
			["Result", "The work supported both the analytical and hardware sides of the lab by contributing to orbital workflow understanding and producing drawings that helped define electronics housing needs."]
		],
		visuals: [
			{ image: "reference_files/Screenshot 2024-11-03 170241.png", alt: "ASRL electronics housing drawing", caption: "Electronics housing drawing used to support lab hardware planning and documentation." },
			{ placeholder: "ROSS workflow visual", caption: "Concept slot for showing orbital analysis workflow, path plots, or simulation outputs." },
			{ placeholder: "Electronics housing revision", caption: "Concept slot for showing how housing requirements and drawing revisions evolved." }
		],
		timeline: [
			["Context", "Joined ASRL work focused on astrodynamics, orbital path efficiency, and robotics-related support hardware."],
			["Analysis", "Used ROSS to support understanding of orbital path efficiency workflows and research objectives."],
			["Output", "Assisted with electronics housing drawings that helped document hardware needs for the lab."],
			["Takeaway", "Built experience at the intersection of aerospace research, analysis tools, and technical drawing."]
		]
	},
	"nanoelectronics": {
		title: "Nanophysics and Nanoelectronics Group",
		logo: "",
		intro: "In the Nanophysics and Nanoelectronics Group, I studied quantum materials by working with CVD-grown molybdenum disulfide, supporting transfer-stage development, presenting poster work, and exploring machine-learning approaches for height-profile prediction.",
		facts: [
			["Research Area", "Quantum materials, CVD-grown molybdenum disulfide, transfer stages, ML image analysis."],
			["Mentor / Lab", "Professor Khondaker, Physics Department at UCF."],
			["Main Impact Points", "Worked with CVD-grown molybdenum disulfide and nanomaterial thinning workflows.", "Supported heated transfer-stage development using cartridge heaters and PID control concepts.", "Presented poster work and explored ML-based height-profile prediction for future analysis."]
		],
		panels: [
			["Problem", "Quantum-material workflows require careful growth, transfer, thinning, and measurement methods so small material changes can be handled without damaging samples or losing useful data."],
			["Approach", "Worked with CVD-grown molybdenum disulfide, learned transfer-stage concepts using PC/PDMS methods, connected heating control ideas to lab hardware, and explored how ML scripts could support future height-profile analysis."],
			["Result", "The work contributed to poster-ready research communication, improved understanding of nanomaterial handling, and laid groundwork for future scripts that could predict or analyze material height profiles."]
		],
		visuals: [
			{ image: "reference_files/PREM_PosterBoard1.jpg", alt: "Nanomaterials poster board", caption: "Presented lab work on thinning nanomaterials using hot plate." },
		]
	},
	"perl": {
		title: "Propulsion and Energy Research Lab (PERL)",
		logo: "reference_files/AxialCombustionChamber.png",
		intro: "My current lab is the Propulsion and Energy Research Lab (PERL), where I worked with the Axial Stage Combustion Chamber project and am currently working with the Mach 10 Oblique Detonation project. Both of these projects have taught me lots on propulsion concepts and how to design a rocket engine.",
		facts: [
			["Research Area", "Propulsion, combustion, hydrogen flashback, emissions, measurement software."],
			["Mentor / Lab", "Professor Kareem Ahmed, Aerospace Engineering Department at UCF."],
			["Main Impact Points", "Created a calculator for the Axial Stage Combustion Chamber project that automates the calculations for determining the necessary conditions necessary to meet mission requirements, reducing time to generate standard facility inputs from several days to a few minutes.", "Contributed to the assembly of the Axial Stage Combustion Chamber Project.", "Looking over trade studies to understand the effects of Mach 10 speeds on a flight vehicle's surface and its internal components."]
		],
		panels: [
			["Problem", "The main problem when I was working with the Axial Stage Combustion Chamber project was that they didn't have a way to easily calculate the necessary conditions to run the requirements within the lab. An excel sheet was made to make these calculations, but to finish making the conditions would mean an engineer would take days and maybe even weeks to understand the Excel sheet and use it appropriately."],
			["Approach", "Understand the Excel sheet: I would go cell by cell, writing down functions to understand what each calculation was used for. Then, I put everything together and conducted research on what each calculation meant and slowly understood how the calculator worked.", "Replicate the Chemical Equilibrium: Since the Excel calculator depended on NASA CEA and the calculator I was building was Python based, I had to choose between keeping the NASA CEA functionality and creating functions that would interpolate, or migrating to an automation process where I used either NASA CEA or Cantera in Python. Any of these options required me to build a class that would seamlessly integrate with the rest of the infrastructure that I had already built. Once I determined that I would stick with Cantera, I built a class that would return the current state of the gas to facilitate Cantera calls.", "Integrate: Not only did I have to learn all the fluid mechanics principles from scratch, but I also had to understand what it meant to calculate the chemical state of any gas given the composition. This meant extensive research and testing towards figuring out what's the best way to integrate all these concepts into one library that makes creating conditions seem effortless. Once I had that process going and finished the backend of the calculator, I focused on building the guided user interface (GUI) that would help users navigate the calculator and create basic conditions to run the facility with given requirements."],
			["Result", "Due to my extensive work on the calculator, the team was able to generate conditions necessary to run the provided requirements from our stakeholders. The calculation process is now simple, effective, and quick, allowing for more allotted time dedicated to more important tasks."]
		],
		visuals: [
			{ image: "reference_files/AxialCombustionChamber.png", alt: "Axial Stage Combustion Chamber hardware", caption: "Axial Stage Combustion Chamber hardware that I helped assemble while supporting facility condition calculations." },
			{ image: "reference_files/SCC_GUI.png", alt: "Measurement software GUI", caption: "GUI used to make condition setup and measurement workflows easier to run for combustion-chamber testing." },
		]
	}
};

const projectDetails = {
	"kxr": {
		title: "Knights Experimental Rocketry - Propulsion Director",
		logo: "reference_files/KXR_LOGO.png",
		intro: "My freshman year, I started out as the propulsion lead for the 2025 IREC team, where I focused my efforts on researching different propellant grains and learning the specifics on combustion chamber design for solid propellant motors. My sophomore year, I became the propulsion director and directed my efforts towards helping other students learn more about the basics of propulsion development. Now, I work under the launch and test infrastructure group, where I help develop the software and hardware necessary to test different rockets and/or motors.",
		facts: [
			["Category", "Club leadership, propulsion, experimental rocketry."],
			["Tools / Skills", "Heat transfer, bolt stress, thrust, impulse, chamber testing, payload-frame design, leadership."],
			["Main Impact Points", "Contributed to the overall design of the 2025 IREC motor and handling the assembly.", "Applied propulsion fundamentals from previous lab work as the propulsion director and led propulsion initiatives across 3 teams."]
		],
		visuals: [
			{ image: "reference_files/PayloadChassisIrec2025.png", caption: "Designed first revisions of payload 3U CubeSat for the 2025 IREC competition for KXR." },
			{ image: "reference_files/IRECROCKETMOTOR.png", caption: "As the propulsion lead of the KXR IREC 2025 rocket, I oversaw the design of the rocket motor and handled the assembly of it."}
		]
	},
	"baja-sae": {
		title: "Knights Racing BAJA SAE",
		logo: "reference_files/BAJA_SAE_LOGO.png",
		intro: "During my freshman year being at the University of Central Florida, I worked with several college students to design, assemble, and test the 2025-2026 UCF BAJA SAE vehicle. I worked more on using SolidWorks to design different parts that were later going to be used as part of the assembly of the vehicle. Furthermore, I expanded my knowledge on 3D modeling and used configurations to streamline different design ideas in SolidWorks.",
		facts: [
			["Category", "Club project, vehicle design, mechanical analysis."],
			["Tools / Skills", "CAD, suspension hardware, tabs, spacers, maintenance stand design, FEA."],
			["Main Impact Points", "Finite Element Analysis", "Suspension Design", "BAJA Support Stand"]
		],
		panels: [
			["Problem", "I had to design parts that could withstand the vehicle weight and stresses handled when operating the vehicle."],
			["Approach", "Verified stand design with hand calculations and FEA analysis on SolidWorks.", "Modeled suspension tabs on SolidWorks and planned for a safety factor of 5 for handling vehicle weight.", "Modeled suspension bearing for more range of motion throughout vehicle operation."],
			["Result", "Resulted in a vehicle design that was built on a trustworthy stand, had adjustable suspension tabs for 3 heights, and had more range of motion of the suspensions."]
		],
		visuals: [
			{ image: "reference_files/BallBearingSpacer.png", caption: "Designed spacer that goes between suspension tab and suspension itself to improve range of motion for the suspension." },
			{ image: "reference_files/Rev1_CarStand.png", caption: "First revision of BAJA support stand." },
			{ image: "reference_files/Rev2_CarStand.png", caption: "Second revision of BAJA support stand." },
			{ image: "reference_files/Rev3_CarStand.png", caption: "Final revision of BAJA support stand." },
			{ image: "reference_files/Rev3_CarStandDeformation.png", caption: "BAJA support stand going through FEA analysis calculations." },
			{ image: "reference_files/SuspensionTabNormal.png", caption: "Final design of adjustable suspension tabs." },
			{ image: "reference_files/SuspensionTabDeformation.png", caption: "Suspension tabs going through FEA analysis calculations." }
		]
	},
	"shpe": {
		title: "Society of Hispanic Professional Engineers",
		logo: "",
		intro: "My freshman year, I focused on being the volunteer director, expanding outreach to 5 new volunteering initiatives. My sophomore year, I became the ResearchSHPE director, helping other students learn how to obtain research positions and being the point of contact for lab tours across 3 labs. My junior year, I became the projects competitions director and led 5 groups of students to design, build, test, and budget their projects.",
		facts: [
			["Category", "Student organization, leadership, outreach, project coordination."],
			["Roles", "Projects Committee Payloads Team, Volunteer Director, ResearchSHPE Co-Director, Competitions Director."],
			["Main Impact Points", "Increased volunteering contacts by 15% during my time as Volunteer Director.", "Maintained a member retention during the Fall semester of around 30+ students per meeting during my time as ResearchSHPE Director.", "Maintained a budget of 625 dollars distributed across 5 teams and ensured each team managed their budget appropriately and responsibly."]
		],
		panels: [
			["Problem", "As a director, maintaining students and providing worthy content for them to digest is difficult as they have important issues they have to attend to and have to manage their time towards their studies. Furthermore, being part of the payload team my freshman year meant I had to design a payload that would be within the restrictions of the 3U NASA CubeSat requirements."],
			["Approach", "Develop an outline of what you are going to design, whether it's a part or a timeline. What was it that I was trying to achieve?", "Work around those requirements and start defining specific points and see if that lines up with your goals.", "Continue iterating until you have a desired timeline for meetings or a design that you prefer to have that not only meets requirements, but also goes above and beyond in some measure."],
			["Result", "Overall, I have helped various students learn more about the opportunities they have at hand and helped them take advantage of those opportunities. Furthermore, as the payloads team member during my freshman year, I was able to directly contribute to the overall design of the payload for that year, which led to an easier implementation of internal parts and the development of the drawings."]
		],
		visuals: [
			{ image: "reference_files/Beach Cleanup Volunteering.jpeg", alt: "SHPE beach cleanup volunteering event", caption: "Beach cleanup event." },
			{ image: "reference_files/SHPE Beach Volunteer.jpeg", alt: "SHPE volunteer event", caption: "Beach cleanup event." },
			{ image: "reference_files/PayloadChassisIrec2025.png", caption: "Designed the initial revisions of the 2025 payload by developing the chassis where internal components are going to be stored." },
		],
		timeline: [
			["Context", "Build connections with other students.", "Make a welcoming environment for people of all backgrounds.", "Help students develop themselves professionally, academically, and through technical projects."],
			["Plan", "Determine what you want students to get out of the program by the end of its term and work around that.", "Design a framework that works for all students given their time commitments.", "Meet with each student individually, and when they can't attend, coordinate an accommodation plan with them.", "Add buffer time in case plan A doesn't go accordingly."],
			["Execute", "Once I had my plan, I would move forward with it and make sure that the students are adhering to their commitments. Furthermore, as part of a team, I would commit to my tasks and put forth the effort necessary to carry out that task."],
			["Takeaway", "As a Payloads team member and consistent director throughout my years with SHPE, I contributed to designing, revising, and improving different plans/goals by breaking larger goals into clear, trackable tasks. Even when a plan didn't work perfectly on the first attempt, I adjusted quickly, executed the next iteration, and verified each milestone before moving forward. I hold my work to a high standard and focus on delivering results that are genuinely solid - not just 'good enough'."]
		]
	},
	"solid-propellant": {
		title: "Solid Propellant Motor Project",
		logo: "reference_files/solid_propellant_scale.jpeg",
		intro: "In this project, I focused on building solid rocket motors out of potassium nitrate, sorbitol, and metal oxides. I tested against different fuel percentages and gathered data by making an in-house scale that would record and send data to my computer. Through this experience, I learned lots about coding in C++, designing in both SolidWorks and OnShape, and the importance of wearing proper PPE or other equipment when handling explosives and sensitive electronics.",
		facts: [
			["Category", "Personal engineering project, propulsion, instrumentation."],
			["Tools / Skills", "C++, strain gauges, HX711 load scale, SolidWorks, propellant casting, test stand design."],
			["Main Impact Points", "Achieved a peak thrust of 55 N for a propellant with 10% red iron oxide, which is 73% of the simulated peak thrust.", "Soldered an HX711 to the strain gauge and arduino nano.", "Adhered to the standard 35/65 fuel/oxidizer ratio as I started out and worked my way to 30/70 fuel/oxidizer.", "Did several different studies across different fuel and O/F ratios."]
		],
		panels: [
			["Problem", "Rockets need a way to reach their apogee. Liquid bi-propellant motors are a great effective option for a long-term investment, but they're expensive and require lots of engineers to handle that. The next best option would be to build a solid propellant rocket motor that can be assembled quickly and implemented effortlessly, creating a need for the design and build of solid propellant rocket motors."],
			["Approach", "Ran experimentation for 10/30/60 metal oxide/sorbitol/potassium nitrate across several different metal oxides.", "Developed a streamlined process that can be followed to quickly make solid propellants and provided documentation that can be followed for proper safety.", "Built ignitors using solid propellants and nichrome wire.", "Developed several iterations of a test stand to improve the stability, reduce vibrations, provide better housing for the electronics bay, and get better data during tests."],
			["Result", "Due to the commitment I gave to this project and the testing I conducted, this project came out to be a success across several different areas. I was able to apply the concepts of propulsion to my own personal project, conduct hand calculations and validate them using appropriate software such as OpenMotor and my own Python-based calculator, and explore an area of propulsion that is not so common. I gained first-hand experience in testing and design of solid propellant rocket motors, learned the necessary procedures to avoid any accidents when working on these projects, and applied propulsion concepts that I had learned from a textbook and from my own lab."]
		],
		visuals: [
			{ image: "reference_files/solid_propellant_scale.jpeg", alt: "Solid propellant thrust measurement test stand", caption: "In-house thrust measurement scale used to record motor test data and improve test quality." },
			{ image: "reference_files/SolidworksScale.jpeg", alt: "SolidWorks model of the test stand scale", caption: "SolidWorks model of the test stand used to plan fixture layout, electronics housing, and sensor placement." },
			{ video: "reference_files/old_solidprop_test.mp4", caption: "Early ignition test that informed later improvements to the scale, setup stability, and test procedure." },
			{ video: "reference_files/new_solidprop_test.mp4", caption: "New ignition test that showed lots of improvement over test stand, propellant, and chamber design." }
		],
	},
	"digital-ad-ai": {
		title: "Digital Advertising AI",
		logo: "",
		intro: "Digital Advertising AI is a Python Tkinter tool that uses Google's Gemma AI model to interpret market trends and ad-performance information. The goal is to help users make clearer campaign decisions by turning scattered advertising inputs into readable recommendations.",
		facts: [
			["Category", "Personal software project, AI-assisted analytics."],
			["Tools / Skills", "Python, Tkinter, Google's Gemma AI model, market trend interpretation."],
			["Main Impact Points", "Built a Tkinter interface for entering advertising and market-trend context.", "Integrated Google's Gemma AI model into a decision-support workflow.", "Focused the project on translating campaign data into clearer recommendations."]
		],
		panels: [
			["Problem", "Advertising decisions can be difficult when market trends, campaign performance, and audience signals are separated across different sources."],
			["Approach", "Built a Python Tkinter interface that gathers user inputs, sends structured context to Google's Gemma AI model, and returns interpretation that is easier to act on."],
			["Result", "The tool acts as an AI-assisted workflow for reading market and ad-performance information, helping users compare campaign direction and identify stronger next steps."]
		],
		visuals: [
			{ placeholder: "Tkinter interface", caption: "Interface area for entering campaign or market-trend context." },
			{ placeholder: "Add sample ad performance input or trend chart", caption: "Use this for data that the AI interprets." },
			{ placeholder: "AI recommendation output", caption: "Output area where the model returns campaign interpretation and suggested direction." }
		],
		timeline: [
			["Context", "Built the tool to make campaign and market-trend interpretation easier to use in advertising decisions."],
			["Build", "Created a Tkinter interface, connected it to Google's Gemma AI model, and shaped the inputs around campaign context."],
			["Test", "Used sample advertising scenarios to evaluate whether the AI responses were useful and readable."],
			["Takeaway", "Learned how AI interfaces can turn broad data into practical decision-support workflows."]
		]
	},
	"electric-generator": {
		title: "Electric Generator",
		logo: "",
		intro: "This project focuses on building an electromagnetic induction generator with 3D printed parts and moving toward an electric bicycle application. The work combines mechanical integration, printed prototypes, and generator testing to understand how motion can be converted into usable electrical output.",
		facts: [
			["Category", "Personal electromechanical project."],
			["Tools / Skills", "Electromagnetic induction, 3D printing, mechanical integration, generator testing."],
			["Main Impact Points", "Built around electromagnetic induction principles.", "Used 3D printed parts to prototype the generator structure.", "Worked toward integrating the generator concept with an electric bicycle use case."]
		],
		panels: [
			["Problem", "A bike-mounted generator needs to turn rotational motion into electrical energy while staying compact, mountable, and mechanically stable."],
			["Approach", "Used electromagnetic induction concepts, 3D printed components, and prototype testing to explore how the generator could be mounted and improved for a bicycle application."],
			["Result", "The project developed into an electromechanical prototype path that connects induction theory with printed hardware and future output testing."]
		],
		visuals: [
			{ placeholder: "Generator CAD or printed part", caption: "Mechanical design area for showing the printed components and mounting concept." },
			{ placeholder: "Coil and magnet arrangement", caption: "Induction setup area for explaining how motion creates electrical output." },
			{ placeholder: "Add voltage test, bike mount, or bench setup", caption: "Use this for measured output or integration proof." }
		],
		timeline: [
			["Context", "Started from the idea of using bike motion as a source for generating electrical power."],
			["Design", "Explored induction layout, printed-part geometry, and how the generator could fit into a bicycle system."],
			["Prototype", "Used 3D printed parts and bench-style testing to develop the generator concept."],
			["Takeaway", "Built experience connecting electromagnetic theory with mechanical prototyping and integration constraints."]
		]
	},
	"robotic-arm": {
		title: "Robotic Arm",
		logo: "",
		intro: "The robotic arm project is a personal robotics build centered on remote control, embedded electronics, and mechanical motion. I designed the project around an Arduino Uno R3 while planning a Raspberry Pi upgrade to expand the control architecture and future capabilities.",
		facts: [
			["Category", "Personal robotics project."],
			["Tools / Skills", "Arduino Uno R3, Raspberry Pi planning, remote control, mechanical design, embedded systems."],
			["Main Impact Points", "Built around Arduino Uno R3 control.", "Focused on remote-controlled motion and mechanical design.", "Planned Raspberry Pi controller upgrades for expanded capability."]
		],
		panels: [
			["Problem", "A robotic arm needs coordinated mechanical motion and reliable control electronics so a user can operate joints predictably from a remote interface."],
			["Approach", "Used an Arduino Uno R3 as the initial controller, developed the project around remote-control behavior, and planned a Raspberry Pi upgrade for more advanced processing and control options."],
			["Result", "The project became a practical robotics platform for learning embedded systems, control logic, wiring, and the mechanical limits of a moving arm assembly."]
		],
		visuals: [
			{ placeholder: "Robotic arm prototype", caption: "Physical mechanism area for showing joints, structure, and range of motion." },
			{ placeholder: "Arduino control setup", caption: "Electronics area for showing wiring, controller layout, and signal flow." },
			{ placeholder: "Remote-control demo", caption: "Operation area for showing how a user controls the arm." }
		],
		timeline: [
			["Context", "Started the project to learn how mechanical arm motion, embedded electronics, and user control fit together."],
			["Build", "Used Arduino-based control while planning a Raspberry Pi upgrade for a more capable architecture."],
			["Test", "Focused testing around motion behavior, controller response, and what the next hardware iteration needs."],
			["Takeaway", "Learned how robotics projects require mechanical design, wiring, control logic, and iteration to work together."]
		]
	},
	"physics-calculator": {
		title: "Physics Calculator",
		logo: "",
		intro: "The Physics Calculator is a personal educational software project built to make physics and calculus workflows easier to follow. It focuses on clearer equations, organized inputs, and readable outputs so problem-solving steps feel less scattered.",
		facts: [
			["Category", "Personal educational software project."],
			["Tools / Skills", "Physics equations, calculus processes, input validation, interface logic."],
			["Main Impact Points", "Created a multi-purpose calculator for physics and calculus workflows.", "Focused on clearer equation handling, user inputs, and outputs.", "Used the project to practice interface logic and input validation."]
		],
		panels: [
			["Problem", "Physics and calculus problems can become difficult to track when equations, variable inputs, and final outputs are handled separately."],
			["Approach", "Built calculator logic around structured inputs, equation handling, output formatting, and validation so users can move through a problem more clearly."],
			["Result", "The tool demonstrates physics and calculus processes through a more organized calculation workflow, helping users see how inputs connect to final results."]
		],
		visuals: [
			{ placeholder: "Calculator interface", caption: "Main input and output area for solving physics or calculus problems." },
			{ placeholder: "Add sample physics calculation", caption: "Use this for an example problem and output." },
			{ placeholder: "Calculation process", caption: "Process area for showing how the tool connects equations, inputs, and outputs." }
		],
		timeline: [
			["Context", "Built the calculator to practice software logic while making technical problem-solving easier to follow."],
			["Build", "Developed equation handling, input validation, and output organization around physics and calculus workflows."],
			["Test", "Checked the tool against example problems to confirm that inputs and outputs followed the intended equations."],
			["Takeaway", "Learned how educational tools depend on both correct math logic and a clear user workflow."]
		]
	},
	"data-visualization": {
		title: "Data Visualization",
		logo: "",
		intro: "The Data Visualization project is a Python executable that turns Excel spreadsheet data into quick scatter-plot summaries. It was built to make spreadsheet data easier to inspect visually without requiring a long manual plotting process each time.",
		facts: [
			["Category", "Personal Python data project."],
			["Tools / Skills", "Python, Excel data, executable packaging, scatter plots, data cleaning."],
			["Main Impact Points", "Built a Python workflow for reading Excel data.", "Generated scatter plots from spreadsheet inputs.", "Packaged the workflow as an executable to make it easier to run."]
		],
		panels: [
			["Problem", "Spreadsheet data can be slow to interpret when users have to manually create plots before seeing trends or relationships."],
			["Approach", "Used Python to parse Excel data, convert selected values into scatter plots, and package the process into an executable workflow."],
			["Result", "The project makes it faster to turn spreadsheet rows into visual summaries, helping users compare data patterns more quickly."]
		],
		visuals: [
			{ placeholder: "Sample Excel input", caption: "Input area for showing the spreadsheet data the tool reads." },
			{ placeholder: "Generated scatter plot", caption: "Output area for showing the chart created from the spreadsheet." },
			{ placeholder: "Executable workflow", caption: "Run workflow area for showing how a user starts the packaged tool." }
		],
		timeline: [
			["Context", "Built the project to reduce the friction of turning spreadsheet data into visual insight."],
			["Build", "Created the Python parsing and plotting workflow, then packaged it so the tool could run as an executable."],
			["Validate", "Checked spreadsheet inputs against generated scatter plots to confirm the data was being visualized correctly."],
			["Takeaway", "Learned how data tools need both reliable parsing and a simple workflow for the user."]
		]
	},
	"c-programs": {
		title: "C Programs",
		logo: "",
		intro: "The C Programs section groups console-based projects I built to practice programming fundamentals. These programs include a quadratic calculator, dominoes simulator, and business manager, giving me practice with procedural logic, user input, simulations, and basic data handling.",
		facts: [
			["Category", "Personal programming fundamentals projects."],
			["Tools / Skills", "C, procedural programming, console interaction, simulation, business logic."],
			["Main Impact Points", "Created a quadratic calculator to practice formula implementation and input handling.", "Built a dominoes simulator to practice game-state logic and procedural control flow.", "Developed a business manager program to practice menus, data organization, and console interaction."]
		],
		panels: [
			["Problem", "Learning C requires practice with precise control flow, user input, functions, and memory-conscious program structure."],
			["Approach", "Built several console programs that rely on loops, conditionals, functions, menus, and structured input/output to solve or simulate different problems."],
			["Result", "The finished programs demonstrate core C fundamentals through practical examples instead of isolated exercises."]
		],
		visuals: [
			{ placeholder: "Quadratic calculator output", caption: "Console output area for showing inputs, formula handling, and results." },
			{ placeholder: "Dominoes simulator state", caption: "Console output area for showing game state or simulation logic." },
			{ placeholder: "Business manager menu", caption: "Console output area for showing program structure and user flow." }
		],
		timeline: [
			["Context", "Built these programs to strengthen C fundamentals through small, focused console applications."],
			["Build", "Used functions, conditionals, loops, and menu-driven user interaction across different program types."],
			["Test", "Ran example inputs and checked outputs to confirm that calculations, simulations, and menu flows behaved correctly."],
			["Takeaway", "Learned how structured programming habits make C projects easier to test, extend, and reason through."]
		]
	},
	"discord-ai-bot": {
		title: "Discord AI Bot",
		logo: "",
		intro: "The Discord AI Bot is a personal software project built to help monitor servers, assist students with time-consuming tasks, and provide code-aware responses for engineering problems. It combines Discord bot development with AI-assisted reasoning in a conversational environment.",
		facts: [
			["Category", "Personal AI bot project."],
			["Tools / Skills", "Discord bot development, AI assistance, server monitoring, code-assisted problem solving."],
			["Main Impact Points", "Developed a Discord bot for AI-assisted conversations.", "Focused on student support, server monitoring, and engineering problem solving.", "Applied experience from Slack bot and AI API work to a personal bot project."]
		],
		panels: [
			["Problem", "Students and server members often need help with repetitive questions, long technical tasks, or engineering problems that benefit from code-aware explanations."],
			["Approach", "Built the bot around Discord interactions and AI responses so users could ask technical questions, get assistance, and use the server as a practical support workspace."],
			["Result", "The bot provides a foundation for AI-assisted student support, combining conversation, monitoring goals, and engineering-focused problem solving in one system."]
		],
		visuals: [
			{ placeholder: "Discord command interaction", caption: "Interaction area for showing a command, prompt, or server conversation." },
			{ placeholder: "Engineering response example", caption: "Response area for showing how the bot helps reason through a technical task." },
			{ placeholder: "Bot event flow", caption: "Architecture area for showing how messages, prompts, and AI responses move through the system." }
		],
		timeline: [
			["Context", "Built the bot to make Discord more useful for technical help, server support, and student workflows."],
			["Build", "Connected Discord bot behavior with AI response logic and shaped the project around practical assistance."],
			["Validate", "Tested the bot with technical prompts and general support scenarios to evaluate response usefulness."],
			["Takeaway", "Learned how AI bots need reliable conversation flow, thoughtful prompting, and clear user goals to be useful."]
		]
	}
};

function escapeHtml(value) {
	return String(value).replace(/[&<>"]/g, (character) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;"
	}[character]));
}

function renderDetailValue(values) {
	if (values.length <= 1) {
		return `<p>${escapeHtml(values[0] || "")}</p>`;
	}

	return `
		<ul class="detail-bullet-list">
			${values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}
		</ul>
	`;
}

function renderDetails(details) {
	return details.map(([label, ...values]) => `
		<div class="detail-fact">
			<strong>${escapeHtml(label)}</strong>
			${renderDetailValue(values)}
		</div>
	`).join("");
}

function renderVisuals(visuals) {
	return visuals.map((visual) => {
		let media = `<div class="visual-placeholder">${escapeHtml(visual.placeholder)}</div>`;

		if (visual.image) {
			media = `<img src="${escapeHtml(visual.image)}" alt="${escapeHtml(visual.alt)}">`;
		}

		if (visual.video) {
			media = `
				<video autoplay loop muted playsinline>
					<source src="${escapeHtml(visual.video)}" type="video/mp4">
				</video>
			`;
		}

		return `
			<figure class="visual-slot">
				${media}
				<figcaption>${escapeHtml(visual.caption)}</figcaption>
			</figure>
		`;
	}).join("");
}

function renderTimeline(timeline) {
	return timeline.map(([label, text]) => `
		<li><strong>${escapeHtml(label)}:</strong> ${escapeHtml(text)}</li>
	`).join("");
}

function renderLogo(logoPath, title) {
	if (!logoPath) {
		return "";
	}

	return `
		<div class="detail-logo-wrap">
			<img class="detail-logo" src="${escapeHtml(logoPath)}" alt="${escapeHtml(title)} logo">
		</div>
	`;
}

function hasItems(items) {
	return Array.isArray(items) && items.length > 0;
}

function renderOptionalSection(title, body) {
	if (!body) {
		return "";
	}

	return `
		<h3>${escapeHtml(title)}</h3>
		${body}
	`;
}

function renderDetailPage(detail, options) {
	const intro = detail.intro ? `<p class="detail-lede">${escapeHtml(detail.intro)}</p>` : "";
	const factsClass = options.stackDetails ? "detail-summary-grid detail-stack" : "detail-summary-grid";
	const panelsClass = options.stackDetails ? "detail-section-grid detail-stack" : "detail-section-grid";
	const factsSection = hasItems(detail.facts)
		? renderOptionalSection(options.factsHeading, `<div class="${factsClass}">${renderDetails(detail.facts)}</div>`)
		: "";
	const panelsSection = hasItems(detail.panels)
		? renderOptionalSection(options.panelsHeading, `<div class="${panelsClass}">${renderDetails(detail.panels)}</div>`)
		: "";
	const visualsSection = hasItems(detail.visuals)
		? renderOptionalSection(options.visualsHeading, `<div class="visual-board">${renderVisuals(detail.visuals)}</div>`)
		: "";
	const topVisualsSection = options.visualsPosition === "top" ? visualsSection : "";
	const lowerVisualsSection = options.visualsPosition === "top" ? "" : visualsSection;
	const timelineSection = hasItems(detail.timeline)
		? renderOptionalSection(options.timelineHeading, `<ul class="detail-timeline">${renderTimeline(detail.timeline)}</ul>`)
		: "";

	return `
		<button class="back-link" type="button" ${options.backAttribute}>Go Back to Main Page</button>

		<div class="experience-detail-hero detail-hero-full">
			<div>
				<span class="eyebrow">${escapeHtml(options.eyebrow)}</span>
				<h2>${escapeHtml(detail.title)}</h2>
				${renderLogo(detail.logo, detail.title)}
				${intro}
			</div>
		</div>

		${topVisualsSection}
		${factsSection}
		${panelsSection}
		${lowerVisualsSection}
		${timelineSection}

		<div class="detail-footer-action">
			<button class="back-link" type="button" ${options.backAttribute}>Go Back to Main Page</button>
		</div>
	`;
}

function showDetail(key, details, options) {
	const detail = details[key];
	const section = document.querySelector(options.sectionSelector);
	const detailView = document.querySelector(options.detailViewSelector);

	if (!detail || !section || !detailView) {
		return;
	}

	detailView.innerHTML = renderDetailPage(detail, options);
	section.classList.add("experience-list-hidden");
	detailView.hidden = false;
	window.location.hash = key;
	section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showList(sectionSelector, detailViewSelector) {
	const section = document.querySelector(sectionSelector);
	const detailView = document.querySelector(detailViewSelector);

	if (!section || !detailView) {
		return;
	}

	section.classList.remove("experience-list-hidden");
	detailView.hidden = true;
	detailView.innerHTML = "";

	if (window.location.hash) {
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
}

const detailOptions = {
	experience: {
		sectionSelector: "#experience",
		detailViewSelector: "#experience-detail-view",
		backAttribute: "data-back-to-experience",
		eyebrow: "Experience Detail",
		visualsHeading: "Visuals",
		visualsPosition: "top",
		factsHeading: "Detailed Role",
		panelsHeading: "Problem to Solution",
		timelineHeading: "Work Breakdown",
		fullHero: true,
		stackDetails: true
	},
	research: {
		sectionSelector: "#research",
		detailViewSelector: "#research-detail-view",
		backAttribute: "data-back-to-research",
		eyebrow: "Research Detail",
		visualsHeading: "Visuals",
		visualsPosition: "top",
		factsHeading: "Research Details",
		panelsHeading: "Research Breakdown",
		timelineHeading: "Work Breakdown"
	},
	project: {
		sectionSelector: "#projects",
		detailViewSelector: "#projects-detail-view",
		backAttribute: "data-back-to-projects",
		eyebrow: "Project Detail",
		visualsHeading: "Visuals",
		visualsPosition: "top",
		factsHeading: "Project Details",
		panelsHeading: "Problem to Solution",
		timelineHeading: "Work Breakdown"
	}
};

function showExperienceDetail(key) {
	if (!isDetailProfileEnabled("experience", key)) {
		return;
	}

	showDetail(key, experienceDetails, detailOptions.experience);
}

function showResearchDetail(key) {
	if (!isDetailProfileEnabled("research", key)) {
		return;
	}

	showDetail(key, researchDetails, detailOptions.research);
}

function showProjectDetail(key) {
	if (!isDetailProfileEnabled("project", key)) {
		return;
	}

	showDetail(key, projectDetails, detailOptions.project);
}

function showExperienceList() {
	showList("#experience", "#experience-detail-view");
}

function showResearchList() {
	showList("#research", "#research-detail-view");
}

function showProjectList() {
	showList("#projects", "#projects-detail-view");
}

function isDetailProfileEnabled(type, key) {
	return enableDetailProfiles && detailProfileVisibility[type]?.[key] !== false;
}

function applyDetailProfileVisibility() {
	const profileTypes = ["experience", "research", "project"];

	profileTypes.forEach((type) => {
		document.querySelectorAll(`.experience-item[data-${type}]`).forEach((card) => {
			const enabled = isDetailProfileEnabled(type, card.dataset[type]);
			const actions = card.querySelector(".experience-actions");
			const title = card.querySelector("h3")?.textContent.trim();

			card.dataset.profileEnabled = enabled ? "true" : "false";

			if (actions) {
				actions.hidden = !enabled;
			}

			if (!enabled) {
				card.removeAttribute("tabindex");
				card.removeAttribute("aria-label");
			} else {
				card.setAttribute("tabindex", "0");

				if (title) {
					card.setAttribute("aria-label", `View more about ${title}`);
				}
			}
		});
	});
}

document.addEventListener("click", (event) => {
	const detailButton = event.target.closest("[data-experience]");
	const researchButton = event.target.closest("[data-research]");
	const projectButton = event.target.closest("[data-project]");
	const backButton = event.target.closest("[data-back-to-experience]");
	const researchBackButton = event.target.closest("[data-back-to-research]");
	const projectBackButton = event.target.closest("[data-back-to-projects]");

	if (detailButton && isDetailProfileEnabled("experience", detailButton.dataset.experience)) {
		showExperienceDetail(detailButton.dataset.experience);
	}

	if (researchButton && isDetailProfileEnabled("research", researchButton.dataset.research)) {
		showResearchDetail(researchButton.dataset.research);
	}

	if (projectButton && isDetailProfileEnabled("project", projectButton.dataset.project)) {
		showProjectDetail(projectButton.dataset.project);
	}

	if (backButton) {
		showExperienceList();
	}

	if (researchBackButton) {
		showResearchList();
	}

	if (projectBackButton) {
		showProjectList();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Enter" && event.key !== " ") {
		return;
	}

	const detailCard = event.target.closest(".experience-item[data-experience]");
	const researchCard = event.target.closest(".experience-item[data-research]");
	const projectCard = event.target.closest(".experience-item[data-project]");

	if (detailCard && isDetailProfileEnabled("experience", detailCard.dataset.experience)) {
		event.preventDefault();
		showExperienceDetail(detailCard.dataset.experience);
	}

	if (researchCard && isDetailProfileEnabled("research", researchCard.dataset.research)) {
		event.preventDefault();
		showResearchDetail(researchCard.dataset.research);
	}

	if (projectCard && isDetailProfileEnabled("project", projectCard.dataset.project)) {
		event.preventDefault();
		showProjectDetail(projectCard.dataset.project);
	}
});

window.addEventListener("DOMContentLoaded", () => {
	applyDetailProfileVisibility();

	const key = window.location.hash.replace("#", "");

	if (key && experienceDetails[key] && isDetailProfileEnabled("experience", key)) {
		showExperienceDetail(key);
	}

	if (key && researchDetails[key] && isDetailProfileEnabled("research", key)) {
		showResearchDetail(key);
	}

	if (key && projectDetails[key] && isDetailProfileEnabled("project", key)) {
		showProjectDetail(key);
	}
});
