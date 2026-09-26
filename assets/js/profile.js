const profileIcons = {
  location: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.2"/>',
  university: '<path d="M3 9 12 4l9 5M4 10v10m4-10v10m4-10v10m4-10v10m4-10v10M2.5 21h19"/>',
  email: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 7 8 6 8-6"/>',
  linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="2"/><path d="M8 10v6M8 7.4v.2M12 16v-6m0 2.4c.6-1.6 4-2 4 1V16"/>',
  scholar: '<path d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z"/><path d="M6 11v5c3.5 3 8.5 3 12 0v-5M21.5 9v6"/>',
  orcid: '<circle cx="12" cy="12" r="9"/><path d="M9 10v5m0-7v.2m3 7v-5h2.1a2.5 2.5 0 0 1 0 5H12"/>',
  researchgate: '<path d="M4 18V6h5a3 3 0 0 1 0 6H4m5 0 5 6M14 7.5A5.5 5.5 0 1 1 13 16"/>',
  github: '<path d="M8 19c-4 1-4-2-6-3m16 6v-3.5a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 21.5 7 4.3 4.3 0 0 0 21.4 4S20.3 3.7 18 5.3a12 12 0 0 0-6 0C9.7 3.7 8.6 4 8.6 4A4.3 4.3 0 0 0 8.5 7 4.7 4.7 0 0 0 7.3 10c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 12 18v4"/>',
  cv: '<path d="M6 3.5h8l4 4V20H6zM14 3.5v4h4M12 11v6m-2.5-2.5L12 17l2.5-2.5"/>'
};

const profileLinks = {
  email: 'mailto:Kiabad78@gmail.com',
  linkedin: 'https://www.linkedin.com/in/reza-badiei-28a4b4290',
  scholar: 'https://scholar.google.com/citations?user=Bf52UxMAAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0008-7320-473X',
  researchgate: 'https://www.researchgate.net/profile/Reza-Badiei',
  github: 'https://github.com/kia-78',
  cv: 'assets/CV.pdf'
};

function profileIcon(name) {
  return `<span class="author-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${profileIcons[name]}</svg></span>`;
}

class SiteProfile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a class="portrait" href="index.html" aria-label="Reza Badiei, home"><img src="assets/images/profile.jpg" alt=""></a>
      <a class="profile-name" href="index.html">Reza Badiei</a>
      <p class="profile-role">Electronics Engineer</p>
      <p class="profile-bio">Embedded systems, electronic hardware, and FPGA-based development.</p>
      <div class="profile-links">
        <a href="${profileLinks.email}">${profileIcon('email')} Email</a>
        <a href="${profileLinks.linkedin}" target="_blank" rel="noreferrer">${profileIcon('linkedin')} LinkedIn</a>
        <a href="${profileLinks.scholar}" target="_blank" rel="noreferrer">${profileIcon('scholar')} Google Scholar</a>
        <a href="${profileLinks.orcid}" target="_blank" rel="noreferrer">${profileIcon('orcid')} ORCID</a>
        <a href="${profileLinks.researchgate}" target="_blank" rel="noreferrer">${profileIcon('researchgate')} ResearchGate</a>
        <a href="${profileLinks.github}" target="_blank" rel="noreferrer">${profileIcon('github')} GitHub</a>
        <a class="cv-download" href="${profileLinks.cv}" download aria-label="CV (PDF)">${profileIcon('cv')} CV</a>
      </div>`;
  }
}

customElements.define('site-profile', SiteProfile);
