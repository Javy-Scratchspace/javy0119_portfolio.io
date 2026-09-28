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
			["Approach", "SolidWorks: Build hangar door models to develop manufacturing-ready drawings.", "Beamline: Produce files that give orders to machine on where to drill holes to attach clips.", "Messer Nesting: Make laster cut metal parts that are used for clips for connecting hangar doors and other parts that are helpful for helping employees keep track of material."],
			["Result", "Clients get satisfied results that are long-term affordable solutions in reduced time."]
		],
		visuals: [
			{ image: "reference_files/Python Cut List.jpeg", alt: "Python cut list automation example", caption: "Automated cut list program that displays the results after performing a merge and split of beam orders to maintain beam length orders (normally 20') and ensure all materials are ordered." },
			{ image: "reference_files/General Door Calcs Excel Sheet.jpeg", alt: "Excel door calculation sheet example", caption: "Developed an Excel database that takes in door dimensions and panel count and spits out the Risa file best used to copy from. Also conducts calculations given wind speed and determines if the panel with the dimensions can handle the stresses." },
			{ image: "reference_files/Risa Strctural Analysis.jpeg", alt: "Risa Structural Analysis grid points example", caption: "Example of hangar door via Risa Structural Analysis program. These grid points define beam connections where beams are connected via clips. The software produces a visual that shows the doors weakest and strongest points." },
            { image: "reference_files/WellBiltFinalResult.png", alt: "Final Door Design Example", caption: "Example of a biparting hangar door being finally built."}
		],
		timeline: [
			["Build", "Use Risa to ensure hangar door beams handle the wind loads with a sufficient safety factor fo 10, SolidWorks to develop the drawings and ensure fast manufacturing processes, and Excel to develop cut lists necessary for building hangar doors."],
			["Validation", "Validated Risa calculations by determining wind loads at the center point of each door frame and hand calculating the deflections."],
			["Takeaway", "I learned how to take a design from concept to reality. I was able to assist and epedite the design and manufacturing processes for building client solutions while also building automation tools that assist engineers in purchasing materials by reducing time to generate cut lists by 47%."]
		]
	},
	"code-meets-bagel": {
		title: "Software Developer - Code Meets Bagel",
        logo: "reference_files/cmb.jpg",
        intro: "As an intern for Code Meets Bagel, I focused on developing proper documentation for an AI Slack Bot. I also helped in the development and testing of the AI. The purpose of this bot was to help a marketing team build marketing solution by integrating AI with other marketing software platforms.",
		facts: [
			["Role", "Software Developer"],
			["Focus Areas", "Python, Slack bot development, Claude/OpenAI APIs, GitHub workflows, deployment."],
			["Main Impact Points", "Managed testing infrastructure across several different Slack bots.", "Handled heirarchy of Slack bot communication.", "Implemented a method to decrease token usage by 11%."]
		],
		panels: [
			["Problem", "A marketing team needed a bot that was capable of producing ads based on team requests."],
			["Approach", "Slack: The framework where the bots were developed. Here, team members could interact with different bots and make requests for ad generation. The bot would develop a response and our program would parse it to determine what task was needed to be completed and how.", "OpenAI/Claude API: Used to handle bot queries to large language AI models (LLM).", "Python: The language that the Slack bots were built on. Using Python, I was able to develop test files that would test for different scenarios that the marketing team would come up with. Several runs were conducted to see what prompt would be most beneficial for explaining the role to the AI."],
			["Result", "A Slack bot integrated with AI thats capable of handling consumer queries and breaking down what needs are to be met, how they need to be met, and what commands must be called."]
		],
		visuals: [
        ],
		timeline: [
			["Build", "Create a simple bot within Slack capable of handling user mentions. Then, integrate the bot with AI so that the bot can handle regular conversations with a human."],
			["Validation", "To validate, simply set up tests that are common scenarios for the team and run it with either different role descriptions or prompting that is said different but conveys the same message to understand how the bot will react and what the best response is."],
			["Takeaway", "This experience was my introduction to API calls. Thanks to this experience, I not only understand how API calls work, but can also use this informaiton to build software that requires outsourcing of data or making calls to an AI. I was able to successfully build my own AI Discord chat bot that helps me with homework and general queries."]
		]
	},
	"lockheed-martin": {
		title: "Systems Engineer - Lockheed Martin",
		logo: "reference_files/lm_logo.jpg",
		intro: "As a Systems Engineer with Lockheed Martin working under the ARISE Modeling Based Systems Engineering (MBSE) team, I focused on using Cameo to model stakeholder projects and Python to build automation projects within Cameo. I used Regex and AI based parsing to build a plugin that can parse code files for different project requirements. I implemented several methodologies and data structures to help automate the search and retrieval process of Cameo packages and GitLab files. Overall, I helped increase the productivity of the team members and of the stakeholders.",
		facts: [
			["Role", "Systems Engineer"],
			["Focus Areas", "Cameo Systems Modeler, plugin development, Python backend logic, C++ simulation review."],
			["Main Impact Points", "Enhanced in-house Cameo plugins to automate Engineering Processes using Python, reducing model generation and simulation timeframes from days to hours.", "Assisted in the generation of models using Cameo Systems Modeler that demonstrate project simulations.", "Implemented several CS concepts that reduced human error by allowing the program to conduct searches for packages and GitLab files, reducing model error by 37%.", "Testing different regular expression (regex) methods that capture desired parameters more accurately, increasing coverage of parameters by 25%.", "Implemented AI-based parsing to improve regex parsing, allowing for the plugin to adhere to different coding standard, improving parsing flexibility, and increasing accuraccy of capturing parameters."]
		],
		panels: [
			["Problem", "Other programs within Lockheed Martin need a way to model their projects such that others can read it well and it accurately describes what the project is focused on."],
			["Approach", "Cameo Systems Modeler: Demonstrates how each part functions within a system and provides a friendly interface to model project integration.", "Jython: A mixture of Java and Python that works within Cameo. Its used to automate the Python-based framework.", "Consistently update the GitLab so that you and your peers can work alognside each other."],
			["Result", "Summarize approved outcomes such as improved usability, clearer model operations, or stronger systems engineering fluency."]
		],
		visuals: [
			{ image: "reference_files/Python Logo.png", alt: "Python Logo", caption: "Python language was used to develop in-house plugins for other projects." },
			{ image: "reference_files/CameoExample.png", alt: "Sample Cameo Pic", caption: "This is a sample project that models the components of a system and how they operate with each other." },
		],
		timeline: [
			["Build", "Built and assisted in the development of several plugins. Implemented different computer science techniques to help automate the process and reduce human error."],
			["Validation", "Underwent testing fazes for different plugins, provided feedback on testing, and handeled AI conversations such that I optimized a prompt that reduces the token usage."],
			["Takeaway", "Working for Lockheed Martin provided an insght into how the industry handles product development and testing. Throughout my time with my team, I have been needed to develop several documents that go into detail on what the plugin is and does and how the plugin works."]
		]
	}
};

const enableDetailProfiles = false;

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

const researchDetails = {
	"fsu-young-scholars": {
		title: "FSU Young Scholars Program",
		logo: "reference_files/FSU_LOGO.png",
		intro: "Use this detail view to expand the perovskite LED research into a deeper story. Replace this text with the research question, lab context, materials studied, methods used, and what you presented.",
		facts: [
			["Research Area", "Perovskites, materials science, and LED applications."],
			["Mentor / Lab", "Professor Biwu Ma, Biochemistry Department."],
			["Main Impact Points", "Learned X-ray diffraction techniques.", "Developed skills in Python data analysis.", "Learned basics on quantum computing."]
		],
		panels: [
			["Research Question", "Light-emitting diodes (LED's) have become popular as of recently due to their applications in light emissions. Specifically, they have more economic benefits and an increased lifespan when compared to modern day fluorescent lights. The goal was to synthesize DMEDA Lead(II) Bromide to make one-dimensional organic metal halide hybrid with edge-sharing octahedrons and study its structural and photophysical properties."],
			["Methods", "Manufacutre these perovskites using the vapor diffusion method.", "Crush crystals to a fine powder to avoid impurities.", "Conduct Single Crystal X-Ray Diffraction (SXRD) to study the structure of the material."],
			["Outcome", "Summarize what you learned, presented, measured, or contributed to the research effort."]
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
			["Context", "Add program timeline, lab placement, and research motivation."],
			["Experiment", "Add the materials, tools, and methods used."],
			["Presentation", "Add thesis or poster details and audience."],
			["Takeaway", "Add the materials science or research skills you gained."]
		]
	},
	"opa": {
		title: "Original Polyoculus Assembly (OPA)",
		logo: "",
		intro: "Use this detail view to explain the telescope assembly work, roof design, enclosure constraints, and support structure. Replace this placeholder with project scope and approved technical details.",
		facts: [
			["Research Area", "Astrophysics, optics, photonics, and mechanical design."],
			["Mentor / Lab", "Professor Eikenberry, CREOL Department at UCF."],
			["Main Impact Points", "Add design responsibility, CAD contribution, or build milestone here."]
		],
		panels: [
			["Problem", "Describe the telescope assembly, enclosure, deployment, and roof support challenge."],
			["Approach", "Explain your roof design, support structure thinking, CAD workflow, and constraints."],
			["Result", "Summarize the design output, review status, or how it supported the assembly project."]
		],
		visuals: [
			{ image: "reference_files/Eikenberry Connex Box.jpg", alt: "OPA telescoping assembly connex enclosure", caption: "Add what this enclosure photo shows and how it relates to the assembly." },
			{ image: "reference_files/EikenberryConnex.png", alt: "OPA design render", caption: "Add CAD, roof, or deployment notes for this visual." },
			{ placeholder: "Add roof design sketch, support diagram, or deployment visual", caption: "Use this slot for a diagram that explains the mechanical design." }
		],
		timeline: [
			["Context", "Add the telescope assembly goal and operating constraints."],
			["Design", "Add roof, support, CAD, and structural considerations."],
			["Review", "Add feedback, iteration, or next-step details."],
			["Takeaway", "Add what you learned about optics-related mechanical systems."]
		]
	},
	"asrl": {
		title: "Astrodynamics, Space, and Robotics Lab (ASRL)",
		logo: "",
		intro: "Use this detail view to expand on orbital path efficiency work, ROSS, and electronics housing drawings. Replace this text with project context, your responsibilities, and visuals that explain the research system.",
		facts: [
			["Research Area", "Astrodynamics, orbital path efficiency, robotics support hardware."],
			["Mentor / Lab", "Professor Elgohary, Aerospace Engineering Department at UCF."],
			["Main Impact Points", "Add drawing output, analysis contribution, or hardware support result here."]
		],
		panels: [
			["Problem", "Describe the orbital efficiency or electronics housing challenge."],
			["Approach", "Explain ROSS usage, drawing support, CAD decisions, or requirements you worked from."],
			["Result", "Summarize the research or design output and how it supported lab work."]
		],
		visuals: [
			{ image: "reference_files/Screenshot 2024-11-03 170241.png", alt: "ASRL electronics housing drawing", caption: "Add notes about the housing drawing and design purpose." },
			{ placeholder: "Add ROSS workflow, orbital path plot, or simulation visual", caption: "Use this slot for orbital analysis or software workflow visuals." },
			{ placeholder: "Add electronics housing revision, requirement sketch, or final render", caption: "Show how the design evolved or what constraints guided it." }
		],
		timeline: [
			["Context", "Add lab objective and research scope."],
			["Analysis", "Add ROSS, orbital path, or drawing workflow details."],
			["Output", "Add deliverables, drawings, or review outcomes."],
			["Takeaway", "Add skills gained in aerospace research and technical drawing."]
		]
	},
	"nanoelectronics": {
		title: "Nanophysics and Nanoelectronics Group",
		logo: "",
		intro: "Use this detail view to explain the quantum materials work, CVD growth, transfer stage, poster presentations, and future ML height-profile scripts. Replace this with lab-safe technical detail and results.",
		facts: [
			["Research Area", "Quantum materials, CVD-grown molybdenum disulfide, transfer stages, ML image analysis."],
			["Mentor / Lab", "Professor Khondaker, Physics Department at UCF."],
			["Main Impact Points", "Add poster result, device workflow, transfer-stage result, or ML goal here."]
		],
		panels: [
			["Problem", "Describe the material growth, transfer, thinning, or measurement challenge."],
			["Approach", "Explain CVD growth, PC/PDMS transfer, cartridge heaters, PID control, or ML workflow."],
			["Result", "Summarize poster findings, lab capability, device progress, or model goals."]
		],
		visuals: [
			{ image: "reference_files/PREM_PosterBoard1.jpg", alt: "Nanomaterials poster board", caption: "Add poster topic, result, and presentation context." },
			{ image: "reference_files/Vapor Method.jpeg", alt: "Vapor method lab visual", caption: "Add how this method relates to growth or transfer work." },
			{ placeholder: "Add transfer stage, microscope image, or ML height-profile visual", caption: "Use this slot for process photos, data, or model outputs." }
		],
		timeline: [
			["Context", "Add lab goal and material system."],
			["Fabrication", "Add CVD, transfer stage, heater, polymer, or controller details."],
			["Analysis", "Add poster findings, measurements, or ML workflow."],
			["Takeaway", "Add research skills in nanomaterials, controls, and computation."]
		]
	},
	"perl": {
		title: "Propulsion and Energy Research Lab (PERL)",
		logo: "",
		intro: "Use this detail view to expand the combustion chamber, flashback, measurement software, Cantera scripts, condition calculator, and manufacturing work. Replace this placeholder with the project story and strongest visuals.",
		facts: [
			["Research Area", "Propulsion, combustion, hydrogen flashback, emissions, measurement software."],
			["Mentor / Lab", "Professor Kareem Ahmed, Aerospace Engineering Department at UCF."],
			["Main Impact Points", "Add calculator result, test support impact, manufacturing contribution, or software metric here."]
		],
		panels: [
			["Problem", "Describe the facility-condition, combustion, measurement, or manufacturing challenge."],
			["Approach", "Explain Cantera scripts, condition calculator logic, GUI support, calculations, or assembly work."],
			["Result", "Summarize the validated calculations, testing support, data workflow, or production improvement."]
		],
		visuals: [
			{ image: "reference_files/AxialCombustionChamber.png", alt: "Axial Stage Combustion Chamber hardware", caption: "Add what this hardware shows and your role in the project." },
			{ image: "reference_files/SCC_GUI.png", alt: "Measurement software GUI", caption: "Add what the software measures and how it supports testing." },
			{ placeholder: "Add condition calculator screenshot, Cantera plot, or assembly photo", caption: "Use this slot for code output, calculations, emissions plots, or manufacturing visuals." }
		],
		timeline: [
			["Context", "Add project objective, facility requirements, and research scope."],
			["Build", "Add calculator, software, Cantera, or manufacturing details."],
			["Validation", "Add how calculations, measurements, or hardware were checked."],
			["Takeaway", "Add propulsion, testing, software, and manufacturing skills gained."]
		]
	}
};

const projectDetails = {
	"kxr": {
		title: "Knights Experimental Rocketry - Propulsion Director",
		logo: "",
		intro: "Use this detail view to expand the propulsion director role into a project case study. Replace this text with launch goals, propulsion architecture, test milestones, team responsibilities, and approved photos or diagrams.",
		facts: [
			["Category", "Club leadership, propulsion, experimental rocketry."],
			["Tools / Skills", "Heat transfer, bolt stress, thrust, impulse, chamber testing, payload-frame design."],
			["Main Impact Points", "Add static-fire result, design milestone, team contribution, or certification progress here."]
		],
		panels: [
			["Problem", "Describe the propulsion system goal, testing constraints, safety requirements, and team needs."],
			["Approach", "Explain chamber design, assembly management, calculations, static-fire preparation, and payload-frame work."],
			["Result", "Summarize the test outcomes, design progress, lessons learned, or leadership impact."]
		],
		visuals: [
			{ video: "reference_files/old_solidprop_test.mp4", caption: "Add what this static-fire or propulsion test demonstrates." },
			{ image: "reference_files/SolidworksScale.jpeg", alt: "SolidWorks test stand model", caption: "Use this slot for propulsion-related CAD, tooling, or fixture work." },
			{ placeholder: "Add chamber assembly photo, payload frame CAD, or thrust curve", caption: "Use this for the most recruiter-friendly visual proof of the project." }
		],
		timeline: [
			["Context", "Add project mission, competition goal, or propulsion subsystem objective."],
			["Design", "Add calculations, CAD, chamber assembly, and hardware decisions."],
			["Test", "Add static-fire process, safety checks, data collected, and results."],
			["Takeaway", "Add what the role taught you about propulsion leadership and testing discipline."]
		]
	},
	"baja-sae": {
		title: "Knights Racing BAJA SAE",
		logo: "",
		intro: "Use this detail view to expand the Baja SAE work into a mechanical design case study. Replace this intro with the subsystem, design constraints, manufacturing process, and competition relevance.",
		facts: [
			["Category", "Club project, vehicle design, mechanical analysis."],
			["Tools / Skills", "CAD, suspension hardware, tabs, spacers, maintenance stand design, FEA."],
			["Main Impact Points", "Add manufactured parts, FEA result, design approval, or car subsystem outcome here."]
		],
		panels: [
			["Problem", "Describe the vehicle or suspension design challenge, packaging limits, and loading conditions."],
			["Approach", "Explain CAD iterations, FEA setup, material assumptions, and fabrication considerations."],
			["Result", "Summarize the final parts, analysis confidence, or how the work supported the Baja car."]
		],
		visuals: [
			{ placeholder: "Add suspension spacer, tab, or maintenance stand CAD", caption: "Use this for the strongest design visual." },
			{ placeholder: "Add FEA stress plot or factor-of-safety screenshot", caption: "Show how the material or geometry was validated." },
			{ placeholder: "Add manufactured part or car integration photo", caption: "Use this slot to show real hardware if available." }
		],
		timeline: [
			["Context", "Add the Baja subsystem and design requirements."],
			["Design", "Add part geometry, CAD process, and revision notes."],
			["Analysis", "Add FEA setup, boundary conditions, and material choice."],
			["Takeaway", "Add what you learned about vehicle design and manufacturable parts."]
		]
	},
	"shpe": {
		title: "Society of Hispanic Professional Engineers",
		logo: "",
		intro: "Use this detail view to expand SHPE leadership, projects, outreach, and ResearchSHPE work. Replace this with event outcomes, leadership scope, collaboration details, and photos.",
		facts: [
			["Category", "Student organization, leadership, outreach, project coordination."],
			["Roles", "Projects Committee Payloads Team, ResearchSHPE Co-Director, Volunteer Director."],
			["Main Impact Points", "Add event attendance, volunteer hours, collaborations, or payload milestone here."]
		],
		panels: [
			["Problem", "Describe the student need, outreach goal, or project collaboration SHPE supported."],
			["Approach", "Explain how you coordinated events, organized volunteers, or contributed to payload design."],
			["Result", "Summarize student impact, project progress, or community engagement outcomes."]
		],
		visuals: [
			{ image: "reference_files/SHPE Logo.jpg", alt: "SHPE logo", caption: "Add chapter, role, or event context here." },
			{ image: "reference_files/Beach Cleanup Volunteering.jpeg", alt: "SHPE beach cleanup volunteering event", caption: "Add volunteer role, event impact, or collaboration details." },
			{ image: "reference_files/SHPE Beach Volunteer.jpeg", alt: "SHPE volunteer event", caption: "Use this slot for another outreach or leadership visual." }
		],
		timeline: [
			["Context", "Add SHPE chapter goals and your leadership responsibilities."],
			["Plan", "Add event planning, project coordination, or outreach workflow."],
			["Execute", "Add photos, attendance, logistics, or collaborations."],
			["Takeaway", "Add what this taught you about leadership and engineering community-building."]
		]
	},
	"solid-propellant": {
		title: "Solid Propellant Motor Project",
		logo: "",
		intro: "Use this detail view as the most complete project template: explain the motor objective, propellant formulation, measurement setup, C++ sensor work, and test stand iterations.",
		facts: [
			["Category", "Personal engineering project, propulsion, instrumentation."],
			["Tools / Skills", "C++, strain gauges, HX711 load scale, SolidWorks, propellant casting, test stand design."],
			["Main Impact Points", "Add thrust data, test count, formulation comparison, or measurement accuracy result here."]
		],
		panels: [
			["Problem", "Describe the need for reliable thrust measurement and repeatable solid propellant testing."],
			["Approach", "Explain propellant compositions, sensor wiring, HX711 integration, C++ scripts, and stand iterations."],
			["Result", "Summarize test outcomes, what changed between stand versions, and what data you plan to collect next."]
		],
		visuals: [
			{ image: "reference_files/solid_propellant_scale.jpeg", alt: "Solid propellant thrust measurement test stand", caption: "Add what this scale measures and how it improved test quality." },
			{ image: "reference_files/SolidworksScale.jpeg", alt: "SolidWorks model of the test stand scale", caption: "Add CAD design intent, fixture constraints, or sensor placement notes." },
			{ video: "reference_files/old_solidprop_test.mp4", caption: "Early ignition test. Add safety context, setup notes, and what changed afterward." }
		],
		timeline: [
			["Context", "Add why you started the motor project and what performance questions you wanted to answer."],
			["Build", "Add propellant casting, test stand design, load-cell electronics, and C++ data collection."],
			["Test", "Add static-fire setup, measurements, observations, and design changes."],
			["Takeaway", "Add what this taught you about propulsion experimentation, instrumentation, and safety."]
		]
	},
	"digital-ad-ai": {
		title: "Digital Advertising AI",
		logo: "",
		intro: "Use this detail view to turn the AI advertising tool into a software case study. Replace this text with the user problem, model workflow, data inputs, and example insights.",
		facts: [
			["Category", "Personal software project, AI-assisted analytics."],
			["Tools / Skills", "Python, Tkinter, Google's Gemma AI model, market trend interpretation."],
			["Main Impact Points", "Add sample input, output insight, model behavior, or workflow result here."]
		],
		panels: [
			["Problem", "Describe the advertising decision or market-analysis problem the tool helps solve."],
			["Approach", "Explain the Tkinter interface, data inputs, prompt strategy, model response, and output format."],
			["Result", "Summarize what the tool can generate, how it helps users, and what you plan to improve."]
		],
		visuals: [
			{ placeholder: "Add Tkinter interface screenshot", caption: "Show the user workflow and key controls." },
			{ placeholder: "Add sample ad performance input or trend chart", caption: "Use this for data that the AI interprets." },
			{ placeholder: "Add AI recommendation output", caption: "Show what the tool produces after analysis." }
		],
		timeline: [
			["Context", "Add why you built the tool and who it helps."],
			["Build", "Add interface, model integration, and data-processing details."],
			["Test", "Add sample data, outputs, and any validation process."],
			["Takeaway", "Add what you learned about AI interfaces and decision-support tools."]
		]
	},
	"electric-generator": {
		title: "Electric Generator",
		logo: "",
		intro: "Use this detail view to expand the generator build into an electromechanical project story. Replace this text with the induction concept, 3D printed parts, bike integration goals, and test plan.",
		facts: [
			["Category", "Personal electromechanical project."],
			["Tools / Skills", "Electromagnetic induction, 3D printing, mechanical integration, generator testing."],
			["Main Impact Points", "Add voltage output, prototype stage, print iteration, or bike integration result here."]
		],
		panels: [
			["Problem", "Describe what electrical or mechanical requirement the generator needs to meet."],
			["Approach", "Explain coil/magnet layout, printed parts, mounting strategy, and test method."],
			["Result", "Summarize prototype progress, output measurements, issues found, and next iteration."]
		],
		visuals: [
			{ placeholder: "Add generator CAD or 3D printed part photo", caption: "Show the mechanical design and printed components." },
			{ placeholder: "Add wiring, coil, or magnet arrangement", caption: "Explain the induction setup visually." },
			{ placeholder: "Add voltage test, bike mount, or bench setup", caption: "Use this for measured output or integration proof." }
		],
		timeline: [
			["Context", "Add the bike-use case and power goal."],
			["Design", "Add induction layout and printed-part decisions."],
			["Prototype", "Add assembly, test setup, and measurements."],
			["Takeaway", "Add what you learned about electromechanical prototyping."]
		]
	},
	"robotic-arm": {
		title: "Robotic Arm",
		logo: "",
		intro: "Use this detail view to expand the robotic arm into a controls and hardware project. Replace this with actuator choices, control method, Arduino/Raspberry Pi architecture, and photos.",
		facts: [
			["Category", "Personal robotics project."],
			["Tools / Skills", "Arduino Uno R3, Raspberry Pi planning, remote control, mechanical design, embedded systems."],
			["Main Impact Points", "Add degrees of freedom, control mode, prototype stage, or demo result here."]
		],
		panels: [
			["Problem", "Describe what motion, control, or manipulation task the arm is designed for."],
			["Approach", "Explain the controller, wiring, remote-control logic, joints, and planned Raspberry Pi upgrade."],
			["Result", "Summarize current motion capability, control reliability, and next hardware/software step."]
		],
		visuals: [
			{ placeholder: "Add robotic arm CAD or prototype photo", caption: "Show the physical mechanism." },
			{ placeholder: "Add wiring diagram or Arduino setup", caption: "Show the control electronics." },
			{ placeholder: "Add remote-control interface or motion demo", caption: "Show how a user operates it." }
		],
		timeline: [
			["Context", "Add the project goal and desired arm capabilities."],
			["Build", "Add mechanical design, electronics, and control logic."],
			["Test", "Add motion tests, limits, and improvements."],
			["Takeaway", "Add what you learned about robotics integration."]
		]
	},
	"physics-calculator": {
		title: "Physics Calculator",
		logo: "",
		intro: "Use this detail view to expand the calculator into a software learning tool. Replace this text with supported equations, calculus processes, interface design, and example outputs.",
		facts: [
			["Category", "Personal educational software project."],
			["Tools / Skills", "Physics equations, calculus processes, input validation, interface logic."],
			["Main Impact Points", "Add supported modules, example solution, or learning outcome here."]
		],
		panels: [
			["Problem", "Describe the physics or calculus workflows the calculator makes easier to understand."],
			["Approach", "Explain equation modules, user inputs, step display, and validation."],
			["Result", "Summarize what the calculator solves and how it demonstrates concepts."]
		],
		visuals: [
			{ placeholder: "Add calculator UI screenshot", caption: "Show the main interface and inputs." },
			{ placeholder: "Add sample physics calculation", caption: "Use this for an example problem and output." },
			{ placeholder: "Add calculus process or step-by-step display", caption: "Show how the tool teaches the process." }
		],
		timeline: [
			["Context", "Add why you built the calculator and what topics it covers."],
			["Build", "Add equation handling, UI, and validation details."],
			["Test", "Add example problems and result checks."],
			["Takeaway", "Add what you learned about educational tools and numerical logic."]
		]
	},
	"data-visualization": {
		title: "Data Visualization",
		logo: "",
		intro: "Use this detail view to expand the Excel-to-plot executable into a data workflow case study. Replace this text with file formats, plotting options, and example charts.",
		facts: [
			["Category", "Personal Python data project."],
			["Tools / Skills", "Python, Excel data, executable packaging, scatter plots, data cleaning."],
			["Main Impact Points", "Add dataset size, chart examples, packaging result, or workflow time saved here."]
		],
		panels: [
			["Problem", "Describe the spreadsheet-to-visualization workflow this project simplifies."],
			["Approach", "Explain Excel parsing, axis selection, plotting logic, and executable packaging."],
			["Result", "Summarize the generated visuals and how users can interpret the data faster."]
		],
		visuals: [
			{ placeholder: "Add sample Excel input", caption: "Show what the tool reads." },
			{ placeholder: "Add generated scatter plot", caption: "Show the output chart." },
			{ placeholder: "Add executable UI or command workflow", caption: "Show how a user runs it." }
		],
		timeline: [
			["Context", "Add why the plotting workflow was useful."],
			["Build", "Add parsing, plotting, and packaging details."],
			["Validate", "Add test spreadsheets and output checks."],
			["Takeaway", "Add what you learned about data tooling."]
		]
	},
	"c-programs": {
		title: "C Programs",
		logo: "",
		intro: "Use this detail view to expand the C programming projects into a fundamentals portfolio section. Replace this text with program goals, algorithms, and screenshots of console output.",
		facts: [
			["Category", "Personal programming fundamentals projects."],
			["Tools / Skills", "C, procedural programming, console interaction, simulation, business logic."],
			["Main Impact Points", "Add program features, input/output examples, or concepts practiced here."]
		],
		panels: [
			["Problem", "Describe what each C program was built to practice or simulate."],
			["Approach", "Explain data structures, loops, conditionals, functions, and user interaction."],
			["Result", "Summarize the finished programs and the programming concepts demonstrated."]
		],
		visuals: [
			{ placeholder: "Add quadratic calculator console output", caption: "Show inputs, formula handling, and results." },
			{ placeholder: "Add dominoes simulator screenshot", caption: "Show game state or simulation logic." },
			{ placeholder: "Add business manager menu or data output", caption: "Show the program structure and user flow." }
		],
		timeline: [
			["Context", "Add course or self-learning goal."],
			["Build", "Add program architecture and functions."],
			["Test", "Add example inputs and edge cases."],
			["Takeaway", "Add what you learned about C and structured programming."]
		]
	},
	"discord-ai-bot": {
		title: "Discord AI Bot",
		logo: "",
		intro: "Use this detail view to expand the Discord AI bot into a software systems project. Replace this with bot commands, moderation features, AI workflow, and example engineering-help interactions.",
		facts: [
			["Category", "Personal AI bot project."],
			["Tools / Skills", "Discord bot development, AI assistance, server monitoring, code-assisted problem solving."],
			["Main Impact Points", "Add command count, server use case, response example, or engineering problem solved here."]
		],
		panels: [
			["Problem", "Describe the student or server-management tasks the bot was meant to reduce."],
			["Approach", "Explain bot commands, AI response flow, monitoring behavior, and code execution or reasoning safeguards."],
			["Result", "Summarize what the bot can do, how it helps users, and what features are planned next."]
		],
		visuals: [
			{ placeholder: "Add Discord command screenshot", caption: "Show a real interaction or command menu." },
			{ placeholder: "Add engineering problem response example", caption: "Show how the bot reasons through a technical task." },
			{ placeholder: "Add bot architecture or event flow", caption: "Explain how messages, prompts, and responses move through the system." }
		],
		timeline: [
			["Context", "Add why the bot was useful for students or server management."],
			["Build", "Add Discord integration, AI flow, and command design."],
			["Validate", "Add test prompts, moderation checks, or response quality checks."],
			["Takeaway", "Add what you learned about AI bots and practical automation."]
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
