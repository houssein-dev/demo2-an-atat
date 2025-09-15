import './roadmap.css';

export default function ProjectsPage() {
  const projects = [
    {
      icon: "🏛️",
      status: "قيد التنفيذ",
      category: "المرحلة الأولى - 2024",
      title: "تعزيز الخدمات الرقمية في الوزارة",
      desc: "إطلاق مشاريع رقمية أساسية لتقوية البنية التحتية الرقمية.",
      features: [
        "إطلاق البوابة الوطنية الموحدة للخدمات الحكومية",
        "تطوير منصة الهوية الرقمية الموحدة",
        "رقمنة 15 خدمة حكومية أساسية",
        "تدريب 500 موظف حكومي"
      ],
      progress: "65%",
      start: "يناير 2024",
      end: "ديسمبر 2024",
      color: "blue"
    },
    {
      icon: "📲",
      status: "مخطط",
      category: "المرحلة الثانية - 2025",
      title: "التوسع في التحول الرقمي",
      desc: "مشاريع توسعية لربط المؤسسات وتعزيز المعاملات الرقمية.",
      features: [
        "ربط جميع الوزارات بالشبكة الحكومية الموحدة",
        "إطلاق تطبيق موحد للخدمات الحكومية الذكية",
        "تطوير نظام الدفع الإلكتروني الحكومي",
        "إنشاء مراكز خدمة رقمية في جميع الولايات"
      ],
      progress: "15%",
      start: "يناير 2025",
      end: "ديسمبر 2025",
      color: "green"
    },
    {
      icon: "🤖",
      status: "مستقبلي",
      category: "المرحلة الثالثة - 2026",
      title: "الحكومة الذكية المتكاملة",
      desc: "مرحلة متقدمة من التحول الرقمي بالاعتماد على الذكاء الاصطناعي والتقنيات الحديثة.",
      features: [
        "تنفيذ نظام الذكاء الاصطناعي في اتخاذ القرارات",
        "إطلاق منصة البيانات المفتوحة الحكومية",
        "تطبيق تقنيات البلوك تشين في المعاملات الرسمية",
        "تحقيق التكامل الكامل بين الأنظمة الحكومية"
      ],
      progress: "5%",
      start: "يناير 2026",
      end: "ديسمبر 2026",
      color: "purple"
    }
  ];

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>الخطة الزمنية للتحول الرقمي في موريتانيا</h1>
        <p>استكشف المراحل التنفيذية والأهداف الاستراتيجية للتحول الرقمي 2024 - 2026</p>
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
              {p.features.map((f,j)=><li key={j}>{f}</li>)}
            </ul>
            <div className="project-footer">
              <p>نسبة الإنجاز: <b>{p.progress}</b></p>
              <p>بداية: {p.start}</p>
              <p>نهاية: {p.end}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="goals-section">
        <h2>الأهداف الاستراتيجية</h2>
        <div className="goals-grid">
          <div className="goal-card">
            <div className="goal-icon">🏛️</div>
            <h3>الحكومة الرقمية</h3>
            <p>تحويل جميع الخدمات الحكومية إلى رقمية بحلول 2026</p>
            <p className="goal-progress">100% رقمنة</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">👥</div>
            <h3>رضا المواطنين</h3>
            <p>تحسين تجربة المستخدم للخدمات الحكومية الرقمية</p>
            <p className="goal-progress">90% رضا</p>
          </div>
          <div className="goal-card">
            <div className="goal-icon">⚡</div>
            <h3>الكفاءة التشغيلية</h3>
            <p>تقليل وقت معالجة المعاملات الحكومية بنسبة 70%</p>
            <p className="goal-progress">70% توفير وقت</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}