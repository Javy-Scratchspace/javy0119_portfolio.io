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

function escapeHtml(value) {
	return value.replace(/[&<>"]/g, (character) => ({
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
		const media = visual.image
			? `<img src="${escapeHtml(visual.image)}" alt="${escapeHtml(visual.alt)}">`
			: `<div class="visual-placeholder">${escapeHtml(visual.placeholder)}</div>`;

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

document.addEventListener("click", (event) => {
	const detailButton = event.target.closest("[data-experience]");
	const researchButton = event.target.closest("[data-research]");
	const backButton = event.target.closest("[data-back-to-experience]");
	const researchBackButton = event.target.closest("[data-back-to-research]");

	if (detailButton) {
		showExperienceDetail(detailButton.dataset.experience);
	}

	if (researchButton) {
		showResearchDetail(researchButton.dataset.research);
	}

	if (backButton) {
		showExperienceList();
	}

	if (researchBackButton) {
		showResearchList();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key !== "Enter" && event.key !== " ") {
		return;
	}

	const detailCard = event.target.closest(".experience-item[data-experience]");
	const researchCard = event.target.closest(".experience-item[data-research]");

	if (detailCard) {
		event.preventDefault();
		showExperienceDetail(detailCard.dataset.experience);
	}

	if (researchCard) {
		event.preventDefault();
		showResearchDetail(researchCard.dataset.research);
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
});
