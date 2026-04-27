import { marked } from 'marked';
import homeRaw from './content/home.md?raw';
import artistsRaw from './content/artists.md?raw';
import galleryRaw from './content/gallery.md?raw';
import eventsRaw from './content/events.md?raw';
import faqRaw from './content/faq.md?raw';
import contactRaw from './content/contact.md?raw';
import purchaseDeliveryRaw from './content/purchase-delivery.md?raw';
import privacyPolicyRaw from './content/privacy-policy.md?raw';
import returnsPolicyRaw from './content/returns-policy.md?raw';
import shippingPickupRaw from './content/shipping-pickup.md?raw';
import termsOfPurchaseRaw from './content/terms-of-purchase.md?raw';
import aboutRaw from './content/about.md?raw';

const pages = {
  home: { title: 'Home', raw: homeRaw },
  about: { title: 'About', raw: aboutRaw },
  artists: { title: 'Artists', raw: artistsRaw },
  gallery: { title: 'Gallery', raw: galleryRaw },
  events: { title: 'Events', raw: eventsRaw },
  faq: { title: 'FAQ', raw: faqRaw },
  'purchase-delivery': { title: 'Purchase & Delivery', raw: purchaseDeliveryRaw },
  'privacy-policy': { title: 'Privacy Policy', raw: privacyPolicyRaw },
  'returns-policy': { title: 'Returns Policy', raw: returnsPolicyRaw },
  'shipping-pickup': { title: 'Shipping & Pickup', raw: shippingPickupRaw },
  'terms-of-purchase': { title: 'Terms of Purchase', raw: termsOfPurchaseRaw },
  contact: { title: 'Contact', raw: contactRaw },
};

const paintingData = [
  {
    title: 'Blue Morning Study',
    artist: 'Dasha',
    description: 'An atmospheric oil painting with layered brushwork and a quiet tonal palette.',
    medium: 'Oil on canvas',
    size: '24 × 30 in',
    price: '$1,200',
    status: 'Available',
  },
  {
    title: 'Golden Hour Still Life',
    artist: 'Mia',
    description: 'Soft light and elegant composition capture the calm of a late afternoon.',
    medium: 'Oil on linen',
    size: '20 × 24 in',
    price: '$950',
    status: 'Available',
  },
  {
    title: 'Quiet Field',
    artist: 'Lena',
    description: 'A meditative landscape built from gentle color and intimate mark-making.',
    medium: 'Oil on panel',
    size: '18 × 22 in',
    price: '$1,050',
    status: 'On Hold',
  },
];

const app = document.getElementById('app');

function createElement(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'className') el.className = value;
    else if (key === 'innerHTML') el.innerHTML = value;
    else el.setAttribute(key, value);
  });
  children.forEach((child) => el.appendChild(child));
  return el;
}

function getCurrentPage() {
  const hash = window.location.hash.slice(1).toLowerCase();
  return pages[hash] ? hash : 'home';
}

function renderNav() {
  const nav = createElement('nav', { className: 'site-nav' });
  const logo = createElement('a', { href: '#home', className: 'brand-link' });
  logo.innerHTML = '<strong>Oil Painting Mondays</strong>';
  nav.appendChild(logo);

  const links = createElement('div', { className: 'nav-links' });
  const order = ['home', 'about', 'artists', 'gallery', 'events', 'faq', 'contact'];
  order.forEach((key) => {
    const page = pages[key];
    if (!page) return;
    const link = createElement('a', { href: `#${key}`, className: 'nav-link' });
    link.textContent = page.title;
    link.dataset.page = key;
    links.appendChild(link);
  });

  nav.appendChild(links);
  return nav;
}

function renderFooter() {
  const footer = createElement('footer', { className: 'site-footer' });
  footer.innerHTML = `
    <div class="footer-copy">© ${new Date().getFullYear()} Oil Painting Mondays</div>
    <div class="footer-links">
      <a href="#privacy-policy">Privacy Policy</a>
      <a href="#terms-of-purchase">Terms of Purchase</a>
      <a href="#returns-policy">Returns Policy</a>
      <a href="#shipping-pickup">Shipping & Pickup</a>
    </div>
  `;
  return footer;
}

function renderPaintings() {
  const section = createElement('section', { className: 'painting-grid' });
  paintingData.forEach((painting) => {
    const card = createElement('article', { className: 'painting-card' });
    card.innerHTML = `
      <div class="painting-card-body">
        <h3>${painting.title}</h3>
        <p class="meta"><strong>${painting.artist}</strong> · ${painting.medium}</p>
        <p>${painting.description}</p>
        <ul class="painting-meta">
          <li><strong>Size:</strong> ${painting.size}</li>
          <li><strong>Price:</strong> ${painting.price}</li>
          <li><strong>Status:</strong> ${painting.status}</li>
        </ul>
      </div>
      <div class="painting-card-footer">
        <a href="#contact" class="button button-ghost">Reserve This Painting</a>
      </div>
    `;
    section.appendChild(card);
  });
  return section;
}

function renderContactForm() {
  const wrapper = createElement('section', { className: 'form-wrapper' });
  wrapper.innerHTML = `
    <h2>Reserve a Painting or Send an Inquiry</h2>
    <form id="contact-form" class="contact-form">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="your@email.com" required />
      </label>
      <label>
        Subject
        <input type="text" name="subject" placeholder="Painting inquiry or event question" required />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" placeholder="Tell us what you’d like to reserve or ask about." required></textarea>
      </label>
      <div class="form-actions">
        <button type="submit" class="button">Send Inquiry</button>
      </div>
      <p class="form-note">This is a demo site. Submitting the form opens your email client with a pre-filled message.</p>
    </form>
  `;

  const form = wrapper.querySelector('#contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject'));
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:hello@oilpaintingmondays.com?subject=${subject}&body=${body}`;
  });

  return wrapper;
}

function renderPage() {
  const pageKey = getCurrentPage();
  const page = pages[pageKey];
  document.title = `${page.title} · Oil Painting Mondays`;

  app.innerHTML = '';
  app.appendChild(renderNav());

  const main = createElement('main', { className: 'site-main' });
  main.innerHTML = `<section class="page-content">${marked.parse(page.raw)}</section>`;

  if (pageKey === 'gallery') {
    main.appendChild(createElement('h2', { className: 'section-heading' }, [document.createTextNode('Featured Works')]))
    main.appendChild(renderPaintings());
  }

  if (pageKey === 'home') {
    const highlightSection = createElement('section', { className: 'home-featured' });
    highlightSection.innerHTML = `
      <h2>Featured Paintings</h2>
      <p>Enjoy a curated preview of original oil paintings available to reserve.</p>
    `;
    highlightSection.appendChild(renderPaintings());
    main.appendChild(highlightSection);
  }

  if (pageKey === 'contact') {
    main.appendChild(renderContactForm());
  }

  app.appendChild(main);
  app.appendChild(renderFooter());
  setActiveNav(pageKey);
}

function setActiveNav(activeKey) {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === activeKey);
  });
}

window.addEventListener('hashchange', renderPage);
window.addEventListener('DOMContentLoaded', renderPage);
