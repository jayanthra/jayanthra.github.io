
document.addEventListener("mousemove", parallax);
const elem = document.querySelector(".parallax");
const expander = document.querySelector('.expander')
const header = document.querySelector('.header')
const internalLink = document.querySelectorAll('.inner-link')
const brandLogos = document.querySelectorAll('.brandlogo')
const brandTitle = document.querySelector('#brandTitle')
const brandDetails = document.querySelector('#brandDetails')
const brandTask = document.querySelector('#brandTask')
const brandUrl = document.querySelector('#brandUrl')

let isMenuOpen = false

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
  let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
  let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
  let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  elem.style.backgroundPosition = x;
}


const toggleMenu = () => {
  if (isMenuOpen) {
    expander.classList.add('expanded')
    header.classList.add('full-height')
  } else {
    expander.classList.remove('expanded')
    header.classList.remove('full-height')
  }
}

expander.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen
  toggleMenu()
})

internalLink.forEach(ele => {
  ele.addEventListener('click', () => {
    isMenuOpen = false
    toggleMenu()
  })
})


const brands = {
  paypay: {
    title: 'PayPay',
    description: 'PayPay Corporation is a Japanese company that develops electronic payment services. It was established in 2018 as a joint venture between the SoftBank Group and Yahoo Japan through Z Holdings',
    task: 'Worked on the Merchant Panel and Backoffice Panel using VueJS',
    url: '',
  },
  paytm: {
    title: 'PayTM',
    description: 'Paytm, is an Indian multinational technology company that specializes in digital payment system, e-commerce and finance, based in Noida, India',
    task: 'Worked on the Windows Mobile App',
    url: 'https://paypay.ne.jp/',
  },
  airsewa: {
    title: 'AirSewa',
    description: 'AirSewa enables travelers to submit grievances and seek information on air travel in India. It is an initiative by MoCA, Govt. of India.',
    task: 'Worked on the website using Angular',
    url: 'https://airsewa.gov.in/',
  },
  etv: {
    title: 'ETV',
    description: 'ETV is an Indian Telugu language general entertainment pay television channel. It is owned by Ramoji Rao under Ramoji Group',
    task: 'Worked on the news and media website using Angular',
    url: 'https://www.etvwin.com/',
  },
  viacom: {
    title: 'Viacom 18',
    description: 'Viacom 18 Media Pvt. Limited is an Indian joint venture operation between TV18 and ViacomCBS based in Mumbai. ',
    task: 'Worked on the Windows Mobile App',
    url: 'https://www.viacom18.com/',
  },
  quikr: {
    title: 'Quikr',
    description: 'Quikr, is an Indian online marketplace and classified advertising company, based in Bangalore, India',
    task: 'Worked on the Windows Mobile App',
    url: 'https://www.quikr.com/',
  },
}

brandLogos.forEach(ele => {
  ele.addEventListener('click', (e) => {
    brandTitle.textContent = brands[e.target.id].title
    brandDetails.textContent = brands[e.target.id].description
    brandTask.textContent = brands[e.target.id].task
    brandUrl.setAttribute('href', brands[e.target.id].url)
  })
})
