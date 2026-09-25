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

document.addEventListener("click", (event) => {
	const detailButton = event.target.closest("[data-experience]");
	const backButton = event.target.closest("[data-back-to-experience]");

	if (detailButton) {
		showExperienceDetail(detailButton.dataset.experience);
	}

	if (backButton) {
		showExperienceList();
	}
});

window.addEventListener("DOMContentLoaded", () => {
	const key = window.location.hash.replace("#", "");

	if (key && experienceDetails[key]) {
		showExperienceDetail(key);
	}
});
