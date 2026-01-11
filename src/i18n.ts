import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Headquarters",
        archive: "Case Archives",
        equipment: "Equipment Room",
        parents: "Parents Corner",
        contact: "Secure Line",
        cta: "Start Investigating"
      },
      logo: "Detective Onion",
      contact: {
        title: "Secure Line",
        subtitle: "Here you can contact HQ and sign up for updates",
        newsletter_title: "Field Updates",
        form_title: "Contact HQ",
        name_placeholder: "Full Name",
        email_placeholder: "Return Email",
        msg_placeholder: "Write your message here...",
        send_btn: "Send Message",
        success_title: "Message Received!",
        success_msg: "Over and out."
      },
      // תרגום דף ההורים - אנגלית
      parents: {
        hero: {
          badge: "✨ Recommended by parents & educators",
          title: "Let your kids fall in love with thinking 🧅🔍",
          subtitle: "Fascinating detective plot + hands-on science experiment = Unforgettable learning experience in your kitchen",
          safe: "100% Child Safe",
          rating: "4.9/5 Rating",
          users: "Over 1,000 Families",
          cta: "Download the Mystery"
        },
        problems: {
          title: "Does this sound familiar? 🤔",
          items: {
            screens: "Kids glued to screens without meaningful content",
            boredom: "Bored quickly with repetitive games",
            science: "Looking for a fun way to teach science at home",
            logic: "Want to develop creative and logical thinking"
          }
        },
        solution: {
          title: "The Solution: A Detective-Science Experience at Home 🎯",
          subtitle: "Every plot combines a fascinating mystery with a hands-on experiment kids can do at home",
          brain: {
            title: "Critical Thinking",
            desc: "Evidence analysis, pattern recognition, and deduction - skills for life",
            list: ["Logical Thinking", "Problem Solving", "Decision Making"]
          },
          science: {
            title: "Hands-on Science",
            desc: "Simple, safe experiments that teach scientific principles in a fun way",
            list: ["Scientific Inquiry", "Hands-on Practice", "Understanding Phenomena"]
          },
          family: {
            title: "Quality Family Time",
            desc: "A family activity that connects everyone around learning and fun",
            list: ["Shared Experience", "Discussion", "Family Memories"]
          }
        },
        inside: {
          title: "What's included in every case? 📄",
          subtitle: "A comprehensive PDF with everything you need",
          detective: {
            title: "The Detective Plot",
            list: ["Fascinating mystery to solve", "Funny & interesting characters", "Clues & riddles along the way", "Surprising educational solution"]
          },
          experiment: {
            title: "The Science Experiment",
            list: ["Step-by-step detailed instructions", "Simple kitchen ingredients list", "Age-appropriate scientific explanations", "Questions for thought & discussion"]
          },
          format: {
            title: "Convenient & Accessible Format",
            desc: "High-quality PDF you can print or read from a screen. All instructions are clear and accompanied by colorful illustrations."
          }
        },
        ages: {
          title: "Suitable for every age 👶➡️👦➡️👧",
          group1: { title: "Ages 6-8", subtitle: "Kindergarten - 2nd Grade", features: ["Simple mysteries", "Basic experiments", "Parental guidance"] },
          group2: { title: "Ages 9-12", subtitle: "3rd - 6th Grade", features: ["Complex challenges", "More independent", "Expanding knowledge"] },
          group3: { title: "Ages 13+", subtitle: "Teens & Adults", features: ["Advanced mysteries", "Scientific depth", "Complex experiments"] }
        },
        testimonials: {
          title: "What parents are saying 💬",
          review1: { name: "Ronit Cohen", role: "Mom of two (7 & 10)", text: "My kids were so excited about the plot and experiment! We did it together in the kitchen and learned so much." },
          review2: { name: "Danny Levi", role: "4th Grade Teacher", text: "I use these plots in class as enrichment. The students love it and the experiments actually work! Highly recommended." },
          review3: { name: "Sarah Avraham", role: "Mom to a 12yo", text: "My son struggled with reading and didn't like science. These detective plots changed that completely - he asks for more!" },
          review4: { name: "Yossi Mizrahi", role: "Dad of three", text: "Perfect family activity for Friday afternoon! Simple, safe experiments and fascinating stories. Worth every penny!" }
        },
        pricing: {
          title: "Small investment, Big future 💎",
          subtitle: "Less than the cost of a chocolate bar, more than a learning experience that lasts a lifetime",
          badge: "🌟 Launch Offer",
          product_name: "One Detective Plot",
          product_sub: "Includes full science experiment",
          price: "₪9.90",
          payment_type: "One-time payment • Instant download",
          what_you_get: "What you get:",
          features: [
            "High-quality designed PDF",
            "Full fascinating detective plot",
            "Science experiment with detailed steps",
            "Kitchen ingredients list",
            "Age-appropriate explanations",
            "Instant download after payment"
          ],
          cta: "Buy Now & Download",
          secure: "💳 Secure payment • Instant email receipt",
          guarantee: {
            title: "Full Satisfaction Guarantee 🛡️",
            text: "Not satisfied? We'll refund every cent within 7 days, no questions asked. We're sure your kids will love it!"
          }
        },
        faq: {
          title: "Common Questions ❓",
          q1: { q: "Is it really suitable for my child?", a: "Absolutely! The plots are divided into difficulty levels, from age 6 to adults. Each plot is adapted with clear instructions." },
          q2: { q: "How long does the experiment take?", a: "An average experiment takes 20-45 minutes, depending on the level and age. Instructions are step-by-step." },
          q3: { q: "Do I need internet connection?", a: "Only for the initial download. Once you have the PDF, you can use it anywhere, anytime - print or screen, offline." },
          q4: { q: "What materials do I need?", a: "All experiments use simple household items found in any kitchen - water, salt, sugar, vinegar, oil, etc." },
          q5: { q: "Is it safe for kids?", a: "All experiments are designed for safe home execution. We recommend adult supervision, especially for younger ages." },
          q6: { q: "What if I have technical issues?", a: "We're here to help! Contact us at support@detective-onion.com and we'll solve any issue within 24 hours." }
        },
        cta_final: {
          title: "Give your kids the gift of thinking and discovery",
          subtitle: "Join over 1,000 families who discovered that learning can be fun, meaningful, and fascinating",
          btn: "Buy Now for ₪9.90",
          footer: "💾 Instant Download • 🛡️ 7-Day Money Back Guarantee"
        }
      }
    }
  },
  he: {
    translation: {
      nav: {
        home: "מטה הסוכנות",
        archive: "ארכיון התיקים",
        equipment: "חדר הציוד",
        parents: "פינת ההורים",
        contact: "קו מאובטח",
        cta: "התחילו לחקור"
      },
      logo: "הבלש בצלי",
      contact: {
        title: "קו מאובטח",
        subtitle: "כאן יוצרים קשר עם מטה הסוכנות ונרשמים לקבלת עדכונים",
        newsletter_title: "קבלת עדכונים מהשטח",
        form_title: "פנייה למטה",
        name_placeholder: "שם מלא",
        email_placeholder: "אימייל לחזרה",
        msg_placeholder: "...כתבו את ההודעה שלכם",
        send_btn: "שליחת הודעה",
        success_title: "המסר התקבל!",
        success_msg: "רות ס