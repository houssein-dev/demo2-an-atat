
 import './projects.css';

export default function ProjectsPage() {
  const projects = [
    {
      icon: "👁️",
      status: "مكتمل",
      category: "خدمات حكومية",
      title: 'منصة "عين" - نظام إدارة الشكاوى',
      desc: "بوابة إلكترونية تتيح للمواطنين الإبلاغ عن المشاكل الإدارية ومتابعة تطور شكاواهم، بهدف تعزيز الشفافية وتحسين المعالجة.",
      features: [
        "واجهة سهلة الاستخدام للمواطنين",
        "نظام تتبع الشكاوى في الوقت الفعلي",
        "تصنيف تلقائي للشكاوى"
      ],
      progress: 100,
      start: "يناير 2023",
      end: "يونيو 2023",
      color: "blue"
    },
    {
      icon: "🚗",
      status: "جاري التنفيذ",
      category: "المرور والنقل",
      title: "منصة إدارة المخالفات المرورية",
      desc: "نظام رقمي لتسجيل المخالفات ومعالجتها عبر الإنترنت، مع حفظ السجلات والمساعدة على الطريق.",
      features: [
        "تسجيل المخالفات إلكترونياً",
        "دفع الغرامات عبر الإنترنت",
        "نظام معالجة الطعون"
      ],
      progress: 85,
      start: "مارس 2024",
      end: "ديسمبر 2024",
      color: "yellow"
    },
    {
      icon: "🏥",
      status: "في التصميم",
      category: "قطاع الصحة",
      title: "المنصة الرقمية لقطاع الصحة",
      desc: "نظام الكتروني لإدارة المرافق الطبية والمواعيد، يهدف لتطوير قطاع الصحة وتحسين إدارة الرعاية الطبية.",
      features: [
        "ربط جميع المستشفيات والمراكز الصحية",
        "إدارة السجلات الطبية الإلكترونية",
        "نظام حجز المواعيد الطبية"
      ],
      progress: 30,
      start: "يناير 2024",
      end: "ديسمبر 2025",
      color: "orange"
    },
    {
      icon: "⚖️",
      status: "مخطط",
      category: "العدالة التجارية",
      title: "منصة إدارة النظام القضائي التجاري",
      desc: "منصة لإدارة القضايا التجارية إلكترونياً وأرشفة القرارات القضائية.",
      features: [
        "إدارة الملفات القضائية إلكترونياً",
        "نظام المتابعة والإشعارات",
        "أرشفة القرارات القضائية"
      ],
      progress: 15,
      start: "يوليو 2024",
      end: "يونيو 2026",
      color: "purple"
    },
    {
      icon: "💧",
      status: "قيد الدراسة",
      category: "المياه والصرف الصحي",
      title: "نظام المعلومات الوطني للمياه والصرف الصحي (SNEAS)",
      desc: "قاعدة بيانات لإدارة الموارد المائية ومراقبة جودة المياه وفوترة الخدمات.",
      features: [
        "مراقبة جودة المياه في الوقت الفعلي",
        "إدارة شبكات التوزيع",
        "فوترة إلكترونية للخدمات"
      ],
      progress: 5,
      start: "سبتمبر 2024",
      end: "مارس 2027",
      color: "cyan"
    },
    {
      icon: "📚",
      status: "جاري التنفيذ",
      category: "تدريب وتأهيل",
      title: "تعزيز التجارة الرقمية في الوزارة",
      desc: "برنامج تدريب لموظفي الحكومة لتحسين مهاراتهم في الأدوات الرقمية وإدارة البيانات.",
      features: [
        "دورات تدريبية متخصصة",
        "شهادات معتمدة",
        "تطبيق عملي على الأنظمة"
      ],
      progress: 75,
      start: "يناير 2024",
      end: "ديسمبر 2024",
      color: "green"
    }
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>المشاريع والمبادرات الرقمية</h1>
        <p>استكشف المشاريع الرقمية الرائدة التي تقود التحول التكنولوجي في موريتانيا</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className={'project-card ${p.color}'}>
            <div className="project-top">
              <span className="icon">{p.icon}</span>
              <span className="status">{p.status}</span>
            </div>
            <h2>{p.category}</h2>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <ul>
              {p.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>

            {/* شريط التقدم */}
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '${p.progress}%' }}></div>
            </div>
            <p className="progress-text">{p.progress}%</p>

            <div className="project-footer">
              <p>بداية: {p.start}</p>
              <p>نهاية: {p.end}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="idea-section">
        <h2>هل لديك فكرة مشروع رقمي؟</h2>
        <p>نحن نسعى دائماً لتطوير حلول رقمية مبتكرة تخدم المواطنين وتحسن الخدمات الحكومية. شاركنا أفكارك ومقترحاتك للمساهمة في التحول الرقمي.</p>
        <div className="idea-buttons">
          <button className="btn-primary">اقتراح مشروع جديد</button>
          <button className="btn-secondary">عرض جميع المشاريع</button>
        </div>
      </div>
    </section>
  );
}