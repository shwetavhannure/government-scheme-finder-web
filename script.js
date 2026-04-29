const schemes = [
  {
    id: 1,
    name: "PM Awas Yojana (Gramin)",
    type: "central",           
    category: "housing",
    icon: "🏠",
    ministry: "Ministry of Rural Development",
    description: "Financial assistance to rural families to build a pucca house with basic amenities.",
    benefit: "₹1.20 – 1.30 Lakh assistance",
    eligibility: {
      maxIncome: 200000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["farmer", "labour", "unemployed"]
    },
    tags: ["BPL Families", "Rural", "Housing"],
    applyLink: "https://pmayg.dord.gov.in/netiayHome/Home.aspx"
  },

  {
    id: 2,
    name: "PM Awas Yojana (Urban)",
    type: "central",
    category: "housing",
    icon: "🏘️",
    ministry: "Ministry of Housing & Urban Affairs",
    description: "Affordable housing for urban poor through interest subsidy on home loans.",
    benefit: "Up to ₹2.67 Lakh subsidy",
    eligibility: {
      maxIncome: 300000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["labour", "unemployed", "small-business"]
    },
    tags: ["Urban", "EWS/LIG", "Home Loan Subsidy"],
    applyLink: "https://pmay-urban.gov.in/"
  },

  {
    id: 3,
    name: "Pradhan Mantri Ujjwala Yojana",
    type: "central",
    category: "women",
    icon: "🔥",
    ministry: "Ministry of Petroleum & Natural Gas",
    description: "Free LPG connections to women from BPL households to provide clean cooking fuel.",
    benefit: "Free LPG connection + cylinder",
    eligibility: {
      maxIncome: 100000,
      states: "all",
      genders: ["female"],
      occupations: ["farmer", "labour", "unemployed"]
    },
    tags: ["BPL Women", "Free LPG", "Clean Cooking"],
    applyLink: "https://www.pmuy.gov.in/"
  },

  {
    id: 4,
    name: "PM Kisan Samman Nidhi",
    type: "central",
    category: "agriculture",
    icon: "🌾",
    ministry: "Ministry of Agriculture",
    description: "Direct income support of ₹6,000 per year to small and marginal farmers.",
    benefit: "₹6,000/year (₹2,000 × 3 installments)",
    eligibility: {
      maxIncome: 500000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["farmer"]
    },
    tags: ["Farmers", "Direct Benefit Transfer", "Land Ownership"],
    applyLink: "https://pmkisan.gov.in/"
  },

  {
    id: 5,
    name: "Ayushman Bharat – PM-JAY",
    type: "central",
    category: "health",
    icon: "🏥",
    ministry: "Ministry of Health & Family Welfare",
    description: "Health insurance coverage up to ₹5 lakh per family per year for hospitalization.",
    benefit: "₹5 Lakh/year health cover",
    eligibility: {
      maxIncome: 200000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["farmer", "labour", "unemployed"]
    },
    tags: ["Health Insurance", "Cashless Treatment", "BPL Families"],
    applyLink: "https://pmjay.gov.in/"
  },

  {
    id: 6,
    name: "PM Mudra Yojana",
    type: "central",
    category: "finance",
    icon: "💼",
    ministry: "Ministry of Finance",
    description: "Collateral-free loans up to ₹10 lakh for small businesses and entrepreneurs.",
    benefit: "Loan up to ₹10 Lakh",
    eligibility: {
      maxIncome: 1000000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["small-business", "unemployed"]
    },
    tags: ["Business Loan", "No Collateral", "Entrepreneurs"],
    applyLink: "https://www.mudra.org.in/"
  },

  {
    id: 7,
    name: "National Scholarship Portal (NSP)",
    type: "central",
    category: "education",
    icon: "📚",
    ministry: "Ministry of Education",
    description: "Centralized scholarships for SC/ST/OBC/Minority students.",
    benefit: "₹1,000 – ₹25,000/year",
    eligibility: {
      maxIncome: 250000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["student"],
      castes: ["sc", "st", "obc", "minority"]   
    },
    tags: ["Students", "SC/ST/OBC", "Scholarship"],
    applyLink: "https://scholarships.gov.in/"
  },

  {
    id: 8,
    name: "Pradhan Mantri Suraksha Bima Yojana",
    type: "central",
    category: "finance",
    icon: "🛡️",
    ministry: "Ministry of Finance",
    description: "Accidental death and disability insurance for ₹2 lakh at just ₹20 premium per year.",
    benefit: "₹2 Lakh accidental insurance",
    eligibility: {
      minAge: 18,
      maxAge: 70,
      maxIncome: 1000000,
      states: "all",
      genders: ["male", "female"],
      occupations: []   
    },
    tags: ["Accident Insurance", "₹20/year", "All Adults"],
    applyLink: "https://jansuraksha.in/pmsbyScheme"
  },

  {
    id: 9,
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
    type: "central",
    category: "finance",
    icon: "💳",
    ministry: "Ministry of Finance",
    description: "Life insurance cover of ₹2 lakh for death due to any reason at ₹436/year.",
    benefit: "₹2 Lakh life cover",
    eligibility: {
      minAge: 18,
      maxAge: 50,
      maxIncome: 1000000,
      states: "all",
      genders: ["male", "female"],
      occupations: []
    },
    tags: ["Life Insurance", "Low Premium", "All Adults"],
    applyLink: "https://financialservices.gov.in/beta/en/pmjjby"
  },

  {
    id: 10,
    name: "Pradhan Mantri Matru Vandana Yojana",
    type: "central",
    category: "women",
    icon: "👶",
    ministry: "Ministry of Women & Child Development",
    description: "Maternity benefit of ₹5,000 to pregnant and lactating mothers.",
    benefit: "₹5,000 cash benefit",
    eligibility: {
      maxIncome: 500000,
      states: "all",
      genders: ["female"],
      occupations: ["pregnant"]
    },
    tags: ["Pregnant Women", "Maternity", "First Child"],
    applyLink: "https://pmmvy.wcd.gov.in/"
  },

  {
    id: 11,
    name: "Kisan Credit Card (KCC)",
    type: "central",
    category: "agriculture",
    icon: "💳",
    ministry: "Ministry of Agriculture",
    description: "Short-term credit to farmers for agricultural needs at subsidized interest rates.",
    benefit: "Loan up to ₹3 Lakh @ 4% interest",
    eligibility: {
      maxIncome: 500000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["farmer"]
    },
    tags: ["Farmers", "Credit Card", "Subsidized Loan"],
    applyLink: "https://www.nabard.org/"
  },

  {
    id: 12,
    name: "Beti Bachao Beti Padhao",
    type: "central",
    category: "women",
    icon: "👧",
    ministry: "Ministry of Women & Child Development",
    description: "Promotes the welfare and education of the girl child.",
    benefit: "Education support & awareness",
    eligibility: {
      maxIncome: 500000,
      states: "all",
      genders: ["female"],
      occupations: []
    },
    tags: ["Girl Child", "Education", "Welfare"],
    applyLink: "https://wcd.gov.in/women/beti-bachao-beti-padhao"
  },

  {
    id: 13,
    name: "Atal Pension Yojana",
    type: "central",
    category: "finance",
    icon: "🧓",
    ministry: "Ministry of Finance",
    description: "Guaranteed pension scheme for unorganized sector workers.",
    benefit: "₹1,000 – ₹5,000/month pension",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      maxIncome: 1000000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["farmer", "labour", "small-business"]
    },
    tags: ["Pension", "Unorganized Workers", "Retirement"],
    applyLink: "https://financialservices.gov.in/beta/en/atal-pension-yojna"
  },

  {
    id: 14,
    name: "Swachh Bharat Mission (Rural)",
    type: "central",
    category: "housing",
    icon: "🚽",
    ministry: "Ministry of Jal Shakti",
    description: "Financial assistance to rural BPL households to construct household toilets.",
    benefit: "₹12,000 for toilet construction",
    eligibility: {
      maxIncome: 100000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["farmer", "labour", "unemployed"]
    },
    tags: ["Rural", "Sanitation", "BPL"],
    applyLink: "https://sbm.gov.in/"
  },

  {
    id: 15,
    name: "PM Poshan (Mid-Day Meal)",
    type: "central",
    category: "education",
    icon: "🍱",
    ministry: "Ministry of Education",
    description: "Free cooked meals to children in government schools.",
    benefit: "Free daily meal",
    eligibility: {
      minAge: 5,
      maxAge: 14,
      maxIncome: 1000000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["student"]
    },
    tags: ["Children", "School Students", "Free Meal"],
    applyLink: "https://pmposhan.education.gov.in/"
  },

  {
    id: 16,
    name: "Mahatma Jyotirao Phule Jan Arogya Yojana",
    type: "state",            
    category: "health",
    icon: "🏥",
    ministry: "Government of Maharashtra",
    description: "Health insurance up to ₹1.5 lakh for BPL families in Maharashtra.",
    benefit: "₹1.5 Lakh/year health cover",
    eligibility: {
      maxIncome: 100000,
      states: ["Maharashtra"],   
      genders: ["male", "female"],
      occupations: []
    },
    tags: ["Maharashtra", "Health Insurance", "BPL"],
    applyLink: "https://www.jeevandayee.gov.in/"
  },

  {
    id: 17,
    name: "Ladki Bahin Yojana (Maharashtra)",
    type: "state",
    category: "women",
    icon: "👩",
    ministry: "Government of Maharashtra",
    description: "Monthly financial assistance of ₹1,500 to eligible women in Maharashtra.",
    benefit: "₹1,500/month",
    eligibility: {
      minAge: 21,
      maxAge: 65,
      maxIncome: 250000,
      states: ["Maharashtra"],
      genders: ["female"],
      occupations: []
    },
    tags: ["Maharashtra", "Women", "Monthly Income"],
    applyLink: "https://ladakibahin.maharashtra.gov.in/"
  },

  {
    id: 18,
    name: "Kanya Sumangala Yojana (UP)",
    type: "state",
    category: "women",
    icon: "🎓",
    ministry: "Government of Uttar Pradesh",
    description: "Financial support in 6 stages for girl child in Uttar Pradesh.",
    benefit: "₹15,000 total across 6 stages",
    eligibility: {
      minAge: 0,
      maxAge: 25,
      maxIncome: 300000,
      states: ["Uttar Pradesh"],
      genders: ["female"],
      occupations: []
    },
    tags: ["UP", "Girl Child", "Education"],
    applyLink: "https://mksy.up.gov.in/"
  },

  {
    id: 19,
    name: "Mukhyamantri Kisan Kalyan Yojana (MP)",
    type: "state",
    category: "agriculture",
    icon: "🌾",
    ministry: "Government of Madhya Pradesh",
    description: "Additional ₹4,000/year to farmers in MP.",
    benefit: "₹4,000/year additional to PM-Kisan",
    eligibility: {
      maxIncome: 500000,
      states: ["Madhya Pradesh"],
      genders: ["male", "female"],
      occupations: ["farmer"]
    },
    tags: ["MP Farmers", "Income Support", "Agriculture"],
    applyLink: "https://kisan.mp.gov.in/"
  },

  {
    id: 20,
    name: "Amma Unavagam (Tamil Nadu)",
    type: "state",
    category: "finance",
    icon: "🍛",
    ministry: "Government of Tamil Nadu",
    description: "Subsidized meals for ₹1 (Idli) and ₹5 (meals) in Tamil Nadu.",
    benefit: "Meals at ₹1 – ₹5",
    eligibility: {
      maxIncome: 1000000,
      states: ["Tamil Nadu"],
      genders: ["male", "female"],
      occupations: []
    },
    tags: ["Tamil Nadu", "Subsidized Food", "All Citizens"],
    applyLink: "https://www.tn.gov.in/"
  },

  {
    id: 21,
    name: "Rupashree Prakalpa (West Bengal)",
    type: "state",
    category: "women",
    icon: "💍",
    ministry: "Government of West Bengal",
    description: "One-time grant of ₹25,000 to BPL families for marriage.",
    benefit: "₹25,000 one-time grant",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      maxIncome: 120000,
      states: ["West Bengal"],
      genders: ["female"],
      occupations: []
    },
    tags: ["West Bengal", "Marriage Assistance", "BPL Women"],
    applyLink: "https://wbrupashree.gov.in/"
  },

  {
    id: 22,
    name: "Mukhyamantri Kanya Vivah Yojana (Bihar)",
    type: "state",
    category: "women",
    icon: "👰",
    ministry: "Government of Bihar",
    description: "Financial assistance of ₹5,000 for marriage of daughters in Bihar.",
    benefit: "₹5,000 marriage assistance",
    eligibility: {
      minAge: 18,
      maxAge: 40,
      maxIncome: 100000,
      states: ["Bihar"],
      genders: ["female"],
      occupations: []
    },
    tags: ["Bihar", "Marriage", "BPL"],
    applyLink: "https://serviceonline.bihar.gov.in/"
  },

  {
    id: 23,
    name: "Rajiv Gandhi Kisan Nyay Yojana (Chhattisgarh)",
    type: "state",
    category: "agriculture",
    icon: "🌱",
    ministry: "Government of Rajasthan",
    description: "Direct income support for farmers in Rajasthan.",
    benefit: "₹5,000 – ₹9,000/acre",
    eligibility: {
      maxIncome: 500000,
      states: ["Rajasthan"],
      genders: ["male", "female"],
      occupations: ["farmer"]
    },
    tags: ["Rajasthan", "Crop Support", "Farmers"],
    applyLink: "https://kisan.cg.nic.in/"
  },

  {
    id: 24,
    name: "Vasundhara Pension Scheme (Rajasthan)",
    type: "state",
    category: "finance",
    icon: "🧓",
    ministry: "Government of Rajasthan",
    description: "Monthly pension for elderly, widows, and disabled persons in Rajasthan.",
    benefit: "₹500 – ₹1,500/month",
    eligibility: {
      minAge: 55,
      maxIncome: 100000,
      states: ["Rajasthan"],
      genders: ["male", "female"],
      occupations: []
    },
    tags: ["Rajasthan", "Pension", "Elderly"],
    applyLink: "https://ssp.rajasthan.gov.in/LoginContent/MidLogin.aspx"
  },

  {
    id: 25,
    name: "Kerala Karshaka Pension Scheme",
    type: "state",
    category: "agriculture",
    icon: "🥥",
    ministry: "Government of Kerala",
    description: "Monthly pension of ₹1,500 for farmers aged 60+ in Kerala.",
    benefit: "₹1,500/month pension",
    eligibility: {
      minAge: 60,
      maxIncome: 500000,
      states: ["Kerala"],
      genders: ["male", "female"],
      occupations: ["farmer"]
    },
    tags: ["Kerala", "Farmer Pension", "Senior Farmers"],
    applyLink: "https://keralaagriculture.gov.in/en/karshakapension/"
  },

  {
    id: 26,
    name: "Dr. Ambedkar Awas Navinikaran Yojana (Gujarat)",
    type: "state",
    category: "housing",
    icon: "🏗️",
    ministry: "Government of Gujarat",
    description: "Repair and renovation assistance of ₹1 lakh for SC/ST families.",
    benefit: "₹1 Lakh for home renovation",
    eligibility: {
      maxIncome: 150000,
      states: ["Gujarat"],
      genders: ["male", "female"],
      occupations: [],
      castes: ["sc", "st"]    
    },
    tags: ["Gujarat", "SC/ST", "Housing Repair"],
    applyLink: "https://esamajkalyan.gujarat.gov.in/index.aspx?ServiceID=wq9yJJOft1lYsNrpPOIhhQ=="
  },

  {
    id: 27,
    name: "Karnataka Raitha Siri Scheme",
    type: "state",
    category: "agriculture",
    icon: "🌻",
    ministry: "Government of Karnataka",
    description: "Zero interest crop loans for farmers in Karnataka.",
    benefit: "0% interest crop loan",
    eligibility: {
      maxIncome: 500000,
      states: ["Karnataka"],
      genders: ["male", "female"],
      occupations: ["farmer"]
    },
    tags: ["Karnataka", "Zero Interest", "Crop Loan"],
    applyLink: "https://raitamitra.karnataka.gov.in/90/Raita%20Siri/en"
  },

  {
    id: 28,
    name: "PM SVANidhi Scheme",
    type: "central",
    category: "finance",
    icon: "🛒",
    ministry: "Government of India",
    description: "Micro-credit facility for street vendors.",
    benefit: "Loan up to ₹50,000",
    eligibility: {
      maxIncome: 200000,
      states: "all",
      genders: ["male", "female"],
      occupations: ["small-business"]
    },
    tags: ["Street Vendors", "Working Capital", "Urban"],
    applyLink: "https://pmsvanidhi.mohua.gov.in/"
  }

];  


let filteredSchemes = [...schemes];

let activeCategory = 'all';

function incomeValue(incomeStr) {
  if (!incomeStr) return null;

  const map = {
    "0-50000":       25000,
    "50000-100000":  75000,
    "100000-200000": 150000,
    "200000-500000": 350000,
    "500000+":       750000
  };

  return map[incomeStr] || null;
}


function findSchemes() {
  const age        = parseInt(document.getElementById('age').value) || null;
  const incomeStr  = document.getElementById('income').value;
  const income     = incomeValue(incomeStr);
  const state      = document.getElementById('state').value;
  const gender     = document.getElementById('gender').value;
  const occupation = document.getElementById('occupation').value;
  const caste      = document.getElementById('caste').value;

  filteredSchemes = schemes.filter(function(s) {

    const e = s.eligibility;   

    if (age !== null) {
      if (e.minAge && age < e.minAge) return false;  
      if (e.maxAge && age > e.maxAge) return false;   
    }

    if (income !== null && e.maxIncome && income > e.maxIncome) return false;

    if (state && state !== 'all' && e.states !== 'all') {
      if (!e.states.includes(state)) return false;
    }

    if (gender && e.genders && e.genders.length > 0) {
      if (!e.genders.includes(gender)) return false;
    }

    if (occupation && e.occupations && e.occupations.length > 0) {
      if (!e.occupations.includes(occupation)) return false;
    }
    
    if (caste && e.castes) {
      if (!e.castes.includes(caste)) return false;
    }

    if (activeCategory !== 'all' && s.category !== activeCategory) return false;

    return true;
  });

  renderSchemes(filteredSchemes);

  document.getElementById('results-title').textContent = 'Matching Schemes';
}


function resetFilters() {

  document.getElementById('age').value        = '';
  document.getElementById('income').value     = '';
  document.getElementById('state').value      = '';
  document.getElementById('gender').value     = '';
  document.getElementById('occupation').value = '';
  document.getElementById('caste').value      = '';

  activeCategory = 'all';

  document.querySelectorAll('.pill').forEach(function(pill) {
    pill.classList.remove('active');
  });

  document.querySelector('.pill.all').classList.add('active');

  filteredSchemes = [...schemes];

  renderSchemes(filteredSchemes);

  document.getElementById('results-title').textContent = 'All Schemes';
}


function filterByCategory(cat, clickedPill) {
  activeCategory = cat;

  document.querySelectorAll('.pill').forEach(function(pill) {
    pill.classList.remove('active');
  });

  clickedPill.classList.add('active');

  const filtered = (cat === 'all')
    ? schemes
    : schemes.filter(function(s) { return s.category === cat; });

  renderSchemes(filtered);
 
  if (cat === 'all') {
    document.getElementById('results-title').textContent = 'All Schemes';
  } else {
    const capitalized = cat.charAt(0).toUpperCase() + cat.slice(1);
    document.getElementById('results-title').textContent = capitalized + ' Schemes';
  }
}


function renderSchemes(list) {
  const grid = document.getElementById('schemes-grid');

  const countText = list.length + ' scheme' + (list.length !== 1 ? 's' : '') + ' found';
  document.getElementById('results-count').textContent = countText;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="emoji">🔍</div>
        <h3>No schemes found</h3>
        <p>Try adjusting your filters — or reset and browse all schemes.</p>
      </div>
    `;
    return;  
  }

  grid.innerHTML = list.map(function(s, index) {

    let eligibilityText = '';

    if (s.eligibility.minAge) {
      eligibilityText += 'Age: ' + s.eligibility.minAge;
      if (s.eligibility.maxAge) {
        eligibilityText += '–' + s.eligibility.maxAge;
      } else {
        eligibilityText += '+';
      }
      eligibilityText += ' years &nbsp;|&nbsp;';
    }

    if (s.eligibility.maxIncome) {
      eligibilityText += 'Income: Up to ₹' + s.eligibility.maxIncome.toLocaleString('en-IN');
    } else {
      eligibilityText += 'All income groups';
    }

    if (s.eligibility.states !== 'all') {
      const stateList = Array.isArray(s.eligibility.states)
        ? s.eligibility.states.join(', ')
        : s.eligibility.states;
      eligibilityText += ' &nbsp;|&nbsp; State: ' + stateList;
    }

    const tagsHTML = `
      <span class="tag benefit">✅ ${s.benefit}</span>
      ${s.tags.map(function(tag) { return '<span class="tag">' + tag + '</span>'; }).join('')}
    `;

    const schemeTypeLabel = s.type === 'central'
      ? '🏛️ Central Scheme'
      : '🗺️ State Scheme';

    return `
      <div class="scheme-card ${s.category}" style="animation-delay: ${index * 0.05}s">

        <div class="card-top">
          <div class="card-icon ${s.category}">${s.icon}</div>
          <div class="card-title-area">
            <h4>${s.name}</h4>
            <div class="scheme-type ${s.type}">${schemeTypeLabel}</div>
          </div>
        </div>

        <p class="card-desc">${s.description}</p>

        <div class="card-tags">
          ${tagsHTML}
        </div>

        <div class="card-eligibility">
          <strong>Eligibility Highlights</strong>
          ${eligibilityText}
        </div>

        <div class="card-footer">
          <a class="btn-apply" href="${s.applyLink}" target="_blank">Apply Now →</a>
          <div class="scheme-ministry">${s.ministry}</div>
        </div>

      </div>
    `;

  }).join(''); 
}

renderSchemes(schemes);