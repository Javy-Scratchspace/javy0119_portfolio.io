const experienceDetails = {
	"well-bilt": {
		title: "Engineering Intern - Well Bilt Industries",
		intro: "Use this detail view to expand the short experience card into a deeper case study. Replace this intro with project context, your responsibilities, and the engineering or automation impact you want recruiters to remember.",
		heroImage: "reference_files/Risa Strctural Analysis.jpeg",
		heroAlt: "RISA structural analysis model of a hangar door beam",
		facts: [
			["Role", "Engineering Intern"],
			["Focus Areas", "Python automation, RISA modeling, SolidWorks drawings, manufacturing support."],
			["Impact to Fill In", "Add the strongest metric, result, or production improvement here."]
		],
		panels: [
			["Problem", "Describe the bottleneck, manual process, or engineering challenge. Include who it affected and why it mattered."],
			["Approach", "Explain the tools, calculations, scripts, CAD workflow, or analysis method you used to solve it."],
			["Result", "Summarize the measurable outcome, time saved, accuracy gained, or production workflow improvement."]
		],
		visuals: [
			{ image: "reference_files/Python Cut List.jpeg", alt: "Python cut list automation example", caption: "Replace or expand this caption with what the automation shows and why it mattered." },
			{ image: "reference_files/General Door Calcs Excel Sheet.jpeg", alt: "Excel door calculation sheet example", caption: "Add notes about the Excel calculation tool, inputs, outputs, and engineering checks." },
			{ placeholder: "Add SolidWorks drawing, model screenshot, or finished door photo", caption: "Use this slot for another image, video, chart, or before-and-after comparison." }
		],
		timeline: [
			["Context", "Add project background, team, constraints, and timeline."],
			["Build", "Add implementation details, scripts, formulas, modeling assumptions, or CAD decisions."],
			["Validation", "Add how you checked accuracy, reviewed outputs, or confirmed the result with engineers."],
			["Takeaway", "Add what this experience taught you technically or professionally."]
		]
	},
	"code-meets-bagel": {
		title: "Software Developer - Code Meets Bagel",
		intro: "Use this detail view to document the Slack bot, AI API integrations, deployment workflow, and product decisions. Replace this text with the user problem, what you built, and the most important technical outcomes.",
		heroImage: "reference_files/CBM_LOGO.png",
		heroAlt: "Code Meets Bagel logo",
		facts: [
			["Role", "Software Developer"],
			["Focus Areas", "Python, Slack bot development, AI APIs, GitHub workflows, deployment."],
			["Impact to Fill In", "Add usage metrics, product impact, reliability improvements, or team workflow gains here."]
		],
		panels: [
			["Problem", "Describe the workflow the bot improved, the audience, and what made the task difficult before automation."],
			["Approach", "Explain the bot architecture, API calls, prompts, event handling, deployment setup, and any safeguards."],
			["Result", "Summarize the finished feature set, how it was used, and the skills or engineering judgment it demonstrated."]
		],
		visuals: [
			{ image: "reference_files/cmb.jpg", alt: "Code Meets Bagel visual reference", caption: "Replace this caption with what the visual represents: app flow, team brand, or bot behavior." },
			{ placeholder: "Add Slack bot screenshot or interaction flow", caption: "Use this slot for a conversation screenshot, feature demo, or architecture diagram." },
			{ placeholder: "Add API architecture, prompt flow, or deployment graphic", caption: "Show the technical system in a way that is quick for recruiters to scan." }
		],
		timeline: [
			["Context", "Add product goal, users, technical constraints, and team workflow."],
			["Build", "Add bot commands, event handling, Python modules, API providers, and deployment steps."],
			["Validation", "Add testing steps, demo process, error handling, or feedback loop."],
			["Takeaway", "Add what this experience taught you about AI integrations and production software."]
		]
	},
	"lockheed-martin": {
		title: "Systems Engineer - Lockheed Martin",
		intro: "Use this detail view as a portfolio-safe template for systems engineering work. Replace this intro with approved, non-sensitive descriptions of tools, responsibilities, plugin work, modeling workflows, and lessons learned.",
		heroImage: "reference_files/lm_logo.jpg",
		heroAlt: "Lockheed Martin logo",
		facts: [
			["Role", "Systems Engineer"],
			["Focus Areas", "Cameo Systems Modeler, plugin development, Python backend logic, C++ simulation review."],
			["Impact to Fill In", "Add only approved metrics, workflow improvements, or generalized outcomes here."]
		],
		panels: [
			["Problem", "Describe the modeling or workflow challenge in general terms, avoiding restricted details or proprietary system specifics."],
			["Approach", "Explain the non-sensitive tools, modeling process, plugin responsibilities, and engineering practices you used."],
			["Result", "Summarize approved outcomes such as improved usability, clearer model operations, or stronger systems engineering fluency."]
		],
		visuals: [
			{ placeholder: "Add approved Cameo workflow visual", caption: "Use sanitized diagrams, public screenshots, or your own recreated visuals only." },
			{ placeholder: "Add plugin UI mockup or generalized architecture diagram", caption: "Show the kind of engineering interface or workflow you supported without sensitive details." },
			{ placeholder: "Add skills matrix, process map, or timeline visual", caption: "This is a good place for visuals that explain your responsibilities at a high level." }
		],
		timeline: [
			["Context", "Add approved background about the systems engineering environment and your team function."],
			["Build", "Add generalized plugin, modeling, scripting, or simulation-support responsibilities."],
			["Validation", "Add review processes, model checks, tool verification, or collaboration steps that are safe to share."],
			["Takeaway", "Add what this experience taught you about large-scale engineering systems and disciplined documentation."]
		]
	}
};

const researchDetails = {
	"fsu-young-scholars": {
		title: "FSU Young Scholars Program",
		intro: "Use this detail view to expand the perovskite LED research into a deeper story. Replace this text with the research question, lab context, materials studied, methods used, and what you presented.",
		heroImage: "reference_files/IRP_Poster_Photo.jpg",
		heroAlt: "Presenting research poster at the FSU Young Scholars Program",
		facts: [
			["Research Area", "Perovskites, materials science, and LED applications."],
			["Mentor / Lab", "Professor Biwu Ma, Biochemistry Department."],
			["Impact to Fill In", "Add poster title, experiment result, material behavior, or presentation outcome here."]
		],
		panels: [
			["Research Question", "Describe what you were trying to understand about perovskites or LED applications."],
			["Methods", "Explain lab methods, x-ray diffraction work, sample preparation, analysis, or presentation workflow."],
			["Outcome", "Summarize what you learned, presented, measured, or contributed to the research effort."]
		],
		visuals: [
			{ image: "reference_files/IRP_Poster_Photo.jpg", alt: "FSU research poster presentation", caption: "Add poster title, audience, and the main research conclusion." },
			{ image: "reference_files/Me n Jarek.jpeg", alt: "In the lab with a fellow researcher", caption: "Add context about lab work, collaboration, or experimental setup." },
			{ placeholder: "Add x-ray diffraction result, material image, or thesis slide", caption: "Use this slot for data visuals or another research artifact." }
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
		intro: "Use this detail view to explain the telescope assembly work, roof design, enclosure constraints, and support structure. Replace this placeholder with project scope and approved technical details.",
		heroImage: "reference_files/EikenberryConnex.png",
		heroAlt: "OPA telescoping assembly design render",
		facts: [
			["Research Area", "Astrophysics, optics, photonics, and mechanical design."],
			["Mentor / Lab", "Professor Eikenberry, CREOL Department at UCF."],
			["Impact to Fill In", "Add design responsibility, CAD contribution, or build milestone here."]
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
		intro: "Use this detail view to expand on orbital path efficiency work, ROSS, and electronics housing drawings. Replace this text with project context, your responsibilities, and visuals that explain the research system.",
		heroImage: "reference_files/Screenshot 2024-11-03 170241.png",
		heroAlt: "ASRL electronics housing drawing",
		facts: [
			["Research Area", "Astrodynamics, orbital path efficiency, robotics support hardware."],
			["Mentor / Lab", "Professor Elgohary, Aerospace Engineering Department at UCF."],
			["Impact to Fill In", "Add drawing output, analysis contribution, or hardware support result here."]
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
		intro: "Use this detail view to explain the quantum materials work, CVD growth, transfer stage, poster presentations, and future ML height-profile scripts. Replace this with lab-safe technical detail and results.",
		heroImage: "reference_files/PREM_PosterBoard1.jpg",
		heroAlt: "Poster board on thinning nanomaterials and bulk transfer of CVD-grown molybdenum disulfide",
		facts: [
			["Research Area", "Quantum materials, CVD-grown molybdenum disulfide, transfer stages, ML image analysis."],
			["Mentor / Lab", "Professor Khondaker, Physics Department at UCF."],
			["Impact to Fill In", "Add poster result, device workflow, transfer-stage result, or ML goal here."]
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
		intro: "Use this detail view to expand the combustion chamber, flashback, measurement software, Cantera scripts, condition calculator, and manufacturing work. Replace this placeholder with the project story and strongest visuals.",
		heroImage: "reference_files/AxialCombustionChamber.png",
		heroAlt: "Axial Stage Combustion Chamber hardware",
		facts: [
			["Research Area", "Propulsion, combustion, hydrogen flashback, emissions, measurement software."],
			["Mentor / Lab", "Professor Kareem Ahmed, Aerospace Engineering Department at UCF."],
			["Impact to Fill In", "Add calculator result, test support impact, manufacturing contribution, or software metric here."]
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
		intro: "Use this detail view to expand the propulsion director role into a project case study. Replace this text with launch goals, propulsion architecture, test milestones, team responsibilities, and approved photos or diagrams.",
		heroImage: "reference_files/old_solidprop_test.mp4",
		heroAlt: "Static fire test video for propulsion work",
		facts: [
			["Category", "Club leadership, propulsion, experimental rocketry."],
			["Tools / Skills", "Heat transfer, bolt stress, thrust, impulse, chamber testing, payload-frame design."],
			["Impact to Fill In", "Add static-fire result, design milestone, team contribution, or certification progress here."]
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
		intro: "Use this detail view to expand the Baja SAE work into a mechanical design case study. Replace this intro with the subsystem, design constraints, manufacturing process, and competition relevance.",
		heroImage: "reference_files/SolidworksScale.jpeg",
		heroAlt: "CAD reference placeholder for mechanical design work",
		facts: [
			["Category", "Club project, vehicle design, mechanical analysis."],
			["Tools / Skills", "CAD, suspension hardware, tabs, spacers, maintenance stand design, FEA."],
			["Impact to Fill In", "Add manufactured parts, FEA result, design approval, or car subsystem outcome here."]
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
		intro: "Use this detail view to expand SHPE leadership, projects, outreach, and ResearchSHPE work. Replace this with event outcomes, leadership scope, collaboration details, and photos.",
		heroImage: "reference_files/SHPE Logo.jpg",
		heroAlt: "Society of Hispanic Professional Engineers logo",
		facts: [
			["Category", "Student organization, leadership, outreach, project coordination."],
			["Roles", "Projects Committee Payloads Team, ResearchSHPE Co-Director, Volunteer Director."],
			["Impact to Fill In", "Add event attendance, volunteer hours, collaborations, or payload milestone here."]
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
		intro: "Use this detail view as the most complete project template: explain the motor objective, propellant formulation, measurement setup, C++ sensor work, and test stand iterations.",
		heroImage: "reference_files/solid_propellant_scale.jpeg",
		heroAlt: "Test stand scale for solid propellant thrust measurement",
		facts: [
			["Category", "Personal engineering project, propulsion, instrumentation."],
			["Tools / Skills", "C++, strain gauges, HX711 load scale, SolidWorks, propellant casting, test stand design."],
			["Impact to Fill In", "Add thrust data, test count, formulation comparison, or measurement accuracy result here."]
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
		intro: "Use this detail view to turn the AI advertising tool into a software case study. Replace this text with the user problem, model workflow, data inputs, and example insights.",
		heroImage: "reference_files/HSI_app_foto.jpg",
		heroAlt: "Application interface reference image",
		facts: [
			["Category", "Personal software project, AI-assisted analytics."],
			["Tools / Skills", "Python, Tkinter, Google's Gemma AI model, market trend interpretation."],
			["Impact to Fill In", "Add sample input, output insight, model behavior, or workflow result here."]
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
		intro: "Use this detail view to expand the generator build into an electromechanical project story. Replace this text with the induction concept, 3D printed parts, bike integration goals, and test plan.",
		heroImage: "reference_files/SolidworksScale.jpeg",
		heroAlt: "CAD reference placeholder for mechanical design work",
		facts: [
			["Category", "Personal electromechanical project."],
			["Tools / Skills", "Electromagnetic induction, 3D printing, mechanical integration, generator testing."],
			["Impact to Fill In", "Add voltage output, prototype stage, print iteration, or bike integration result here."]
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
		intro: "Use this detail view to expand the robotic arm into a controls and hardware project. Replace this with actuator choices, control method, Arduino/Raspberry Pi architecture, and photos.",
		heroImage: "reference_files/HSI_app_foto.jpg",
		heroAlt: "Project interface reference image",
		facts: [
			["Category", "Personal robotics project."],
			["Tools / Skills", "Arduino Uno R3, Raspberry Pi planning, remote control, mechanical design, embedded systems."],
			["Impact to Fill In", "Add degrees of freedom, control mode, prototype stage, or demo result here."]
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
		intro: "Use this detail view to expand the calculator into a software learning tool. Replace this text with supported equations, calculus processes, interface design, and example outputs.",
		heroImage: "reference_files/HSI_app_foto.jpg",
		heroAlt: "Application interface reference image",
		facts: [
			["Category", "Personal educational software project."],
			["Tools / Skills", "Physics equations, calculus processes, input validation, interface logic."],
			["Impact to Fill In", "Add supported modules, example solution, or learning outcome here."]
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
		intro: "Use this detail view to expand the Excel-to-plot executable into a data workflow case study. Replace this text with file formats, plotting options, and example charts.",
		heroImage: "reference_files/General Door Calcs Excel Sheet.jpeg",
		heroAlt: "Spreadsheet reference image",
		facts: [
			["Category", "Personal Python data project."],
			["Tools / Skills", "Python, Excel data, executable packaging, scatter plots, data cleaning."],
			["Impact to Fill In", "Add dataset size, chart examples, packaging result, or workflow time saved here."]
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
		intro: "Use this detail view to expand the C programming projects into a fundamentals portfolio section. Replace this text with program goals, algorithms, and screenshots of console output.",
		heroImage: "reference_files/HSI_app_foto.jpg",
		heroAlt: "Software project reference image",
		facts: [
			["Category", "Personal programming fundamentals projects."],
			["Tools / Skills", "C, procedural programming, console interaction, simulation, business logic."],
			["Impact to Fill In", "Add program features, input/output examples, or concepts practiced here."]
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
		intro: "Use this detail view to expand the Discord AI bot into a software systems project. Replace this with bot commands, moderation features, AI workflow, and example engineering-help interactions.",
		heroImage: "reference_files/CBM_LOGO.png",
		heroAlt: "AI bot reference image",
		facts: [
			["Category", "Personal AI bot project."],
			["Tools / Skills", "Discord bot development, AI assistance, server monitoring, code-assisted problem solving."],
			["Impact to Fill In", "Add command count, server use case, response example, or engineering problem solved here."]
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

function renderFacts(facts) {
	return facts.map(([label, value]) => `
		<div class="detail-fact">
			<strong>${escapeHtml(label)}</strong>
			<p>${escapeHtml(value)}</p>
		</div>
	`).join("");
}

function renderPanels(panels) {
	return panels.map(([title, text]) => `
		<article class="detail-panel">
			<h3>${escapeHtml(title)}</h3>
			<p>${escapeHtml(text)}</p>
		</article>
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

function showExperienceDetail(key) {
	const detail = experienceDetails[key];
	const experienceSection = document.querySelector("#experience");
	const detailView = document.querySelector("#experience-detail-view");

	if (!detail || !experienceSection || !detailView) {
		return;
	}

	detailView.innerHTML = `
		<button class="back-link" type="button" data-back-to-experience>Go Back to Main Page</button>

		<div class="experience-detail-hero">
			<div>
				<span class="eyebrow">Experience Detail</span>
				<h2>${escapeHtml(detail.title)}</h2>
				<p class="detail-lede">${escapeHtml(detail.intro)}</p>
			</div>
			<div class="detail-hero-media">
				<img src="${escapeHtml(detail.heroImage)}" alt="${escapeHtml(detail.heroAlt)}">
			</div>
		</div>

		<div class="detail-summary-grid">
			${renderFacts(detail.facts)}
		</div>

		<div class="detail-section-grid">
			${renderPanels(detail.panels)}
		</div>

		<h3>Visuals to Add</h3>
		<div class="visual-board">
			${renderVisuals(detail.visuals)}
		</div>

		<h3>Work Breakdown</h3>
		<ul class="detail-timeline">
			${renderTimeline(detail.timeline)}
		</ul>

		<div class="detail-footer-action">
			<button class="back-link" type="button" data-back-to-experience>Go Back to Main Page</button>
		</div>
	`;

	experienceSection.classList.add("experience-list-hidden");
	detailView.hidden = false;
	window.location.hash = key;
	experienceSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showExperienceList() {
	const experienceSection = document.querySelector("#experience");
	const detailView = document.querySelector("#experience-detail-view");

	if (!experienceSection || !detailView) {
		return;
	}

	experienceSection.classList.remove("experience-list-hidden");
	detailView.hidden = true;
	detailView.innerHTML = "";

	if (window.location.hash) {
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
}

function showResearchDetail(key) {
	const detail = researchDetails[key];
	const researchSection = document.querySelector("#research");
	const detailView = document.querySelector("#research-detail-view");

	if (!detail || !researchSection || !detailView) {
		return;
	}

	detailView.innerHTML = `
		<button class="back-link" type="button" data-back-to-research>Go Back to Main Page</button>

		<div class="experience-detail-hero">
			<div>
				<span class="eyebrow">Research Detail</span>
				<h2>${escapeHtml(detail.title)}</h2>
				<p class="detail-lede">${escapeHtml(detail.intro)}</p>
			</div>
			<div class="detail-hero-media">
				<img src="${escapeHtml(detail.heroImage)}" alt="${escapeHtml(detail.heroAlt)}">
			</div>
		</div>

		<div class="detail-summary-grid">
			${renderFacts(detail.facts)}
		</div>

		<div class="detail-section-grid">
			${renderPanels(detail.panels)}
		</div>

		<h3>Visuals to Add</h3>
		<div class="visual-board">
			${renderVisuals(detail.visuals)}
		</div>

		<h3>Work Breakdown</h3>
		<ul class="detail-timeline">
			${renderTimeline(detail.timeline)}
		</ul>

		<div class="detail-footer-action">
			<button class="back-link" type="button" data-back-to-research>Go Back to Main Page</button>
		</div>
	`;

	researchSection.classList.add("experience-list-hidden");
	detailView.hidden = false;
	window.location.hash = key;
	researchSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showResearchList() {
	const researchSection = document.querySelector("#research");
	const detailView = document.querySelector("#research-detail-view");

	if (!researchSection || !detailView) {
		return;
	}

	researchSection.classList.remove("experience-list-hidden");
	detailView.hidden = true;
	detailView.innerHTML = "";

	if (window.location.hash) {
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
}

function showProjectDetail(key) {
	const detail = projectDetails[key];
	const projectsSection = document.querySelector("#projects");
	const detailView = document.querySelector("#projects-detail-view");

	if (!detail || !projectsSection || !detailView) {
		return;
	}

	detailView.innerHTML = `
		<button class="back-link" type="button" data-back-to-projects>Go Back to Main Page</button>

		<div class="experience-detail-hero">
			<div>
				<span class="eyebrow">Project Detail</span>
				<h2>${escapeHtml(detail.title)}</h2>
				<p class="detail-lede">${escapeHtml(detail.intro)}</p>
			</div>
			<div class="detail-hero-media">
				${detail.heroImage.endsWith(".mp4")
					? `<video autoplay loop muted playsinline><source src="${escapeHtml(detail.heroImage)}" type="video/mp4"></video>`
					: `<img src="${escapeHtml(detail.heroImage)}" alt="${escapeHtml(detail.heroAlt)}">`}
			</div>
		</div>

		<div class="detail-summary-grid">
			${renderFacts(detail.facts)}
		</div>

		<div class="detail-section-grid">
			${renderPanels(detail.panels)}
		</div>

		<h3>Visuals to Add</h3>
		<div class="visual-board">
			${renderVisuals(detail.visuals)}
		</div>

		<h3>Work Breakdown</h3>
		<ul class="detail-timeline">
			${renderTimeline(detail.timeline)}
		</ul>

		<div class="detail-footer-action">
			<button class="back-link" type="button" data-back-to-projects>Go Back to Main Page</button>
		</div>
	`;

	projectsSection.classList.add("experience-list-hidden");
	detailView.hidden = false;
	window.location.hash = key;
	projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showProjectList() {
	const projectsSection = document.querySelector("#projects");
	const detailView = document.querySelector("#projects-detail-view");

	if (!projectsSection || !detailView) {
		return;
	}

	projectsSection.classList.remove("experience-list-hidden");
	detailView.hidden = true;
	detailView.innerHTML = "";

	if (window.location.hash) {
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
}

document.addEventListener("click", (event) => {
	const detailButton = event.target.closest("[data-experience]");
	const researchButton = event.target.closest("[data-research]");
	const projectButton = event.target.closest("[data-project]");
	const backButton = event.target.closest("[data-back-to-experience]");
	const researchBackButton = event.target.closest("[data-back-to-research]");
	const projectBackButton = event.target.closest("[data-back-to-projects]");

	if (detailButton) {
		showExperienceDetail(detailButton.dataset.experience);
	}

	if (researchButton) {
		showResearchDetail(researchButton.dataset.research);
	}

	if (projectButton) {
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

	if (detailCard) {
		event.preventDefault();
		showExperienceDetail(detailCard.dataset.experience);
	}

	if (researchCard) {
		event.preventDefault();
		showResearchDetail(researchCard.dataset.research);
	}

	if (projectCard) {
		event.preventDefault();
		showProjectDetail(projectCard.dataset.project);
	}
});

window.addEventListener("DOMContentLoaded", () => {
	const key = window.location.hash.replace("#", "");

	if (key && experienceDetails[key]) {
		showExperienceDetail(key);
	}

	if (key && researchDetails[key]) {
		showResearchDetail(key);
	}

	if (key && projectDetails[key]) {
		showProjectDetail(key);
	}
});
