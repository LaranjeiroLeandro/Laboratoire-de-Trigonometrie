import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sun, Moon, BookOpen } from 'lucide-react';

const COLORS = {
  sin: { lightBg: 'bg-blue-50', darkBg: 'bg-blue-950/40', lightBorder: 'border-blue-200', darkBorder: 'border-blue-800', lightText: 'text-blue-700', darkText: 'text-blue-300', hex: '#3b82f6', label: 'Sinus' },
  cos: { lightBg: 'bg-green-50', darkBg: 'bg-green-950/40', lightBorder: 'border-green-200', darkBorder: 'border-green-800', lightText: 'text-green-700', darkText: 'text-green-300', hex: '#10b981', label: 'Cosinus' },
  tan: { lightBg: 'bg-red-50', darkBg: 'bg-red-950/40', lightBorder: 'border-red-200', darkBorder: 'border-red-800', lightText: 'text-red-700', darkText: 'text-red-300', hex: '#ef4444', label: 'Tangente' },
  csc: { lightBg: 'bg-orange-50', darkBg: 'bg-orange-950/40', lightBorder: 'border-orange-200', darkBorder: 'border-orange-800', lightText: 'text-orange-700', darkText: 'text-orange-300', hex: '#f97316', label: 'Cosécante' },
  sec: { lightBg: 'bg-fuchsia-50', darkBg: 'bg-fuchsia-950/40', lightBorder: 'border-fuchsia-200', darkBorder: 'border-fuchsia-800', lightText: 'text-fuchsia-700', darkText: 'text-fuchsia-300', hex: '#d946ef', label: 'Sécante' },
  cot: { lightBg: 'bg-cyan-50', darkBg: 'bg-cyan-950/40', lightBorder: 'border-cyan-200', darkBorder: 'border-cyan-800', lightText: 'text-cyan-700', darkText: 'text-cyan-300', hex: '#06b6d4', label: 'Cotangente' },
  sinh: { lightBg: 'bg-amber-50', darkBg: 'bg-amber-950/40', lightBorder: 'border-amber-200', darkBorder: 'border-amber-800', lightText: 'text-amber-700', darkText: 'text-amber-300', hex: '#f59e0b', label: 'Sinh' },
  cosh: { lightBg: 'bg-violet-50', darkBg: 'bg-violet-950/40', lightBorder: 'border-violet-200', darkBorder: 'border-violet-800', lightText: 'text-violet-700', darkText: 'text-violet-300', hex: '#8b5cf6', label: 'Cosh' },
  tanh: { lightBg: 'bg-pink-50', darkBg: 'bg-pink-950/40', lightBorder: 'border-pink-200', darkBorder: 'border-pink-800', lightText: 'text-pink-700', darkText: 'text-pink-300', hex: '#ec4899', label: 'Tanh' },
  csch: { lightBg: 'bg-sky-50', darkBg: 'bg-sky-950/40', lightBorder: 'border-sky-200', darkBorder: 'border-sky-800', lightText: 'text-sky-700', darkText: 'text-sky-300', hex: '#0ea5e9', label: 'Csch' },
  sech: { lightBg: 'bg-lime-50', darkBg: 'bg-lime-950/40', lightBorder: 'border-lime-200', darkBorder: 'border-lime-800', lightText: 'text-lime-700', darkText: 'text-lime-300', hex: '#84cc16', label: 'Sech' },
  coth: { lightBg: 'bg-teal-50', darkBg: 'bg-teal-950/40', lightBorder: 'border-teal-200', darkBorder: 'border-teal-800', lightText: 'text-teal-700', darkText: 'text-teal-300', hex: '#14b8a6', label: 'Coth' },
};

const MathFormula = ({ children }) => <span className="mx-1 inline-block font-serif italic whitespace-nowrap">{children}</span>;

const Frac = ({ n, d }) => (
  <span className="inline-flex flex-col align-middle mx-1 text-[0.85em] leading-tight">
    <span className="px-1 border-b border-current text-center">{n}</span>
    <span className="text-center">{d}</span>
  </span>
);

const Sigma = ({ start, end, body }) => (
  <span className="inline-flex items-center mx-1">
    <span className="flex flex-col items-center text-[0.65em] leading-none">
      <span>{end}</span>
      <span className="my-0.5 font-serif text-2xl leading-none">∑</span>
      <span>{start}</span>
    </span>
    <span className="ml-1 align-middle">{body}</span>
  </span>
);

const FormulaWrapper = ({ func, body }) => (
  <div className="flex flex-wrap items-center justify-center gap-1">
    <MathFormula>{func} = </MathFormula>
    <div className="flex items-center">
      {body}
    </div>
  </div>
);

const EXPLANATIONS = {
  sin: { 
    title: "Le Sinus", 
    desc: "est la mesure de la hauteur verticale atteinte par ton point sur le cercle.", 
    concept: "À quel point je monte ou je descends par rapport au centre ?", 
    detail: "Quand le rayon pointe vers le haut (90°), le sinus est à son maximum (1). S'il pointe vers le bas, il devient négatif.",
    taylor: <FormulaWrapper func="sin(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>(-1)<sup>n</sup></>} d={<>(2n+1)!</>} />x<sup>2n+1</sup></>} />} />,
    euler: <FormulaWrapper func="sin(x)" body={<Frac n={<>e<sup>ix</sup> - e<sup>-ix</sup></>} d="2i" />} />
  },
  cos: { 
    title: "Le Cosinus", 
    desc: "est la mesure de l'écartement horizontal de ton point par rapport au centre.", 
    concept: "À quel point je m'éloigne vers la droite ou la gauche ?", 
    detail: "C'est l'ombre projetée du rayon sur le sol. À 0°, l'ombre est totale (1), à 90°, elle disparaît (0).",
    taylor: <FormulaWrapper func="cos(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>(-1)<sup>n</sup></>} d={<>(2n)!</>} />x<sup>2n</sup></>} />} />,
    euler: <FormulaWrapper func="cos(x)" body={<Frac n={<>e<sup>ix</sup> + e<sup>-ix</sup></>} d="2" />} />
  },
  tan: { 
    title: "La Tangente", 
    desc: "est la mesure effectuée sur la droite verticale qui 'touche' le cercle à droite.", 
    concept: "Rapport entre montée et déplacement horizontal.", 
    detail: "Plus ton rayon est raide, plus il doit monter haut pour frapper la paroi. À 90°, c'est indéfini.",
    taylor: <FormulaWrapper func="tan(x)" body={<Sigma start="n=1" end="∞" body={<><Frac n={<>B<sub>2n</sub>(-4)<sup>n</sup>(1-4<sup>n</sup>)</>} d={<>(2n)!</>} />x<sup>2n-1</sup></>} />} />,
    euler: <FormulaWrapper func="tan(x)" body={<Frac n={<>e<sup>ix</sup> - e<sup>-ix</sup></>} d={<>i(e<sup>ix</sup> + e<sup>-ix</sup>)</>} />} />
  },
  sec: { 
    title: "La Sécante", 
    desc: "Inverse du Cosinus (1/cos).", 
    concept: "Où le prolongement de ma pente coupe-t-il le sol ?", 
    detail: "À 0°, elle vaut 1. Quand le cosinus tend vers 0 (90°), elle tend vers l'infini.",
    taylor: <FormulaWrapper func="sec(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>|E<sub>2n</sub>|</>} d={<>(2n)!</>} />x<sup>2n</sup></>} />} />,
    euler: <FormulaWrapper func="sec(x)" body={<Frac n="2" d={<>e<sup>ix</sup> + e<sup>-ix</sup></>} />} />
  },
  csc: { 
    title: "La Cosécante", 
    desc: "Inverse du Sinus (1/sin).", 
    concept: "Où le prolongement de ma pente coupe-t-il le ciel ?", 
    detail: "À 90°, elle vaut 1. Quand le sinus tend vers 0 (0°), elle tend vers l'infini.",
    taylor: <FormulaWrapper func="csc(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>2(2<sup>2n-1</sup>-1)|B<sub>2n</sub>|</>} d={<>(2n)!</>} />x<sup>2n-1</sup></>} />} />,
    euler: <FormulaWrapper func="csc(x)" body={<Frac n="2i" d={<>e<sup>ix</sup> - e<sup>-ix</sup></>} />} />
  },
  cot: { 
    title: "La Cotangente", 
    desc: "Inverse de la Tangente (1/tan).", 
    concept: "Écartement horizontal relatif à la montée.", 
    detail: "C'est l'inverse de la pente. À 0°, elle est indéfinie car on ne monte pas.",
    taylor: <FormulaWrapper func="cot(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>(-1)<sup>n</sup> 2<sup>2n</sup> B<sub>2n</sub></>} d={<>(2n)!</>} />x<sup>2n-1</sup></>} />} />,
    euler: <FormulaWrapper func="cot(x)" body={<Frac n={<>i(e<sup>ix</sup> + e<sup>-ix</sup>)</>} d={<>e<sup>ix</sup> - e<sup>-ix</sup></>} />} />
  },
  sinh: { 
    title: "Sinh", 
    desc: "Sinus Hyperbolique.", 
    concept: "Hauteur sur une hyperbole.", 
    detail: "Contrairement au sinus classique, il continue de grimper sans jamais s'arrêter.",
    taylor: <FormulaWrapper func="sinh(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n="1" d={<>(2n+1)!</>} />x<sup>2n+1</sup></>} />} />,
    euler: <FormulaWrapper func="sinh(x)" body={<Frac n={<>e<sup>x</sup> - e<sup>-x</sup></>} d="2" />} />
  },
  cosh: { 
    title: "Cosh", 
    desc: "Cosinus Hyperbolique.", 
    concept: "Largeur sur l'hyperbole.", 
    detail: "Le Cosh ne descend jamais sous 1. C'est la forme d'une chaîne suspendue.",
    taylor: <FormulaWrapper func="cosh(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n="1" d={<>(2n)!</>} />x<sup>2n</sup></>} />} />,
    euler: <FormulaWrapper func="cosh(x)" body={<Frac n={<>e<sup>x</sup> + e<sup>-x</sup></>} d="2" />} />
  },
  tanh: { 
    title: "Tanh", 
    desc: "Tangente Hyperbolique.", 
    concept: "Inclinaison de la trajectoire hyperbolique.", 
    detail: "S'approche de 1 ou -1 sans jamais dépasser ces limites horizontales.",
    taylor: <FormulaWrapper func="tanh(x)" body={<Sigma start="n=1" end="∞" body={<><Frac n={<>B<sub>2n</sub> 4<sup>n</sup>(4<sup>n</sup>-1)</>} d={<>(2n)!</>} />x<sup>2n-1</sup></>} />} />,
    euler: <FormulaWrapper func="tanh(x)" body={<Frac n={<>e<sup>x</sup> - e<sup>-x</sup></>} d={<>e<sup>x</sup> + e<sup>-x</sup></>} />} />
  },
  csch: { 
    title: "Csch", 
    desc: "Inverse du Sinh.", 
    concept: "Inverse de la montée hyperbolique.", 
    detail: "Indéfinie à 0. S'approche de 0 quand x devient très grand.",
    taylor: <FormulaWrapper func="csch(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>2(1-2<sup>2n-1</sup>)B<sub>2n</sub></>} d={<>(2n)!</>} />x<sup>2n-1</sup></>} />} />,
    euler: <FormulaWrapper func="csch(x)" body={<Frac n="2" d={<>e<sup>x</sup> - e<sup>-x</sup></>} />} />
  },
  sech: { 
    title: "Sech", 
    desc: "Inverse du Cosh.", 
    concept: "Inverse de la largeur hyperbolique.", 
    detail: "Toujours entre 0 et 1. Ressemble à une cloche de distribution.",
    taylor: <FormulaWrapper func="sech(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>E<sub>2n</sub></>} d={<>(2n)!</>} />x<sup>2n</sup></>} />} />,
    euler: <FormulaWrapper func="sech(x)" body={<Frac n="2" d={<>e<sup>x</sup> + e<sup>-x</sup></>} />} />
  },
  coth: { 
    title: "Coth", 
    desc: "Inverse de la Tanh.", 
    concept: "Inverse de l'inclinaison hyperbolique.", 
    detail: "Indéfinie à 0. Tend vers 1 ou -1 à l'infini.",
    taylor: <FormulaWrapper func="coth(x)" body={<Sigma start="n=0" end="∞" body={<><Frac n={<>2<sup>2n</sup> B<sub>2n</sub></>} d={<>(2n)!</>} />x<sup>2n-1</sup></>} />} />,
    euler: <FormulaWrapper func="coth(x)" body={<Frac n={<>e<sup>x</sup> + e<sup>-x</sup></>} d={<>e<sup>x</sup> - e<sup>-x</sup></>} />} />
  }
};

const IconSigma = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 7V4H6l10 8-10 8h12v-3" />
  </svg>
);

const IconExp = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" className="font-serif italic font-bold" style={{ fontSize: '20px', fill: color }}>e</text>
  </svg>
);

const TangentVisualizer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mainCat, setMainCat] = useState('TRIG'); 
  const [subCatMemory, setSubCatMemory] = useState({ TRIG: 'NORMAL', HYP: 'NORMAL' });
  const subCat = subCatMemory[mainCat];
  const [tabMemory, setTabMemory] = useState({ TRIG_NORMAL: 'tan', TRIG_INVERSE: 'sec', HYP_NORMAL: 'tanh', HYP_INVERSE: 'sech' });
  const currentCombo = `${mainCat}_${subCat}`;
  const activeTab = tabMemory[currentCombo];
  const [infoTab, setInfoTab] = useState('CONCEPT');

  const handleMainChange = (cat) => setMainCat(cat);
  const handleSubChange = (sub) => setSubCatMemory(prev => ({ ...prev, [mainCat]: sub }));
  const handleTabClick = (tabId) => setTabMemory(prev => ({ ...prev, [currentCombo]: tabId }));

  const getActiveTabs = () => {
    if (mainCat === 'TRIG') return subCat === 'NORMAL' ? ['sin', 'cos', 'tan'] : ['csc', 'sec', 'cot'];
    return subCat === 'NORMAL' ? ['sinh', 'cosh', 'tanh'] : ['csch', 'sech', 'coth'];
  };

  const [angleDeg, setAngleDeg] = useState(45);
  const [inputMode, setInputMode] = useState('deg');
  const [localInputValue, setLocalInputValue] = useState('45');

  const isHyp = mainCat === 'HYP';
  const normalizedDeg = isHyp 
    ? Math.max(-360, Math.min(360, angleDeg)) 
    : (angleDeg === 360 ? 360 : ((angleDeg % 360) + 360) % 360);

  const angleRad = (normalizedDeg * Math.PI) / 180;
  
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);
  const tan = Math.tan(angleRad);
  const sec = 1 / cos;
  const csc = 1 / sin;
  const cot = 1 / tan;
  const t = angleRad; 
  const cosh = Math.cosh(t);
  const sinh = Math.sinh(t);
  const tanh = Math.tanh(t);
  const sech = 1 / cosh;
  const csch = 1 / sinh;
  const coth = 1 / tanh;

  const size = 450;
  const center = size / 2;
  const radius = 100;
  const px = center + radius * cos;
  const py = center - radius * sin;
  const hx = center + radius * cosh;
  const hy = center - radius * sinh;

  const cosIsZero = Math.abs(cos) < 1e-12;
  const sinIsZero = Math.abs(sin) < 1e-12;
  const sinhIsZero = Math.abs(sinh) < 1e-12;
  const tanhIsZero = Math.abs(tanh) < 1e-12;

  const getHyperbolaPath = () => {
    let path = "";
    for (let i = -3; i <= 3; i += 0.1) {
      const x = center + radius * Math.cosh(i);
      const y = center - radius * Math.sinh(i);
      if (i === -3) path += `M ${x} ${y} `;
      else path += `L ${x} ${y} `;
    }
    return path;
  };

  const getPreciseRadianLabel = (deg) => {
    const labels = { 0:"0", 30:"π/6", 45:"π/4", 60:"π/3", 90:"π/2", 120:"2π/3", 135:"3π/4", 150:"5π/6", 180:"π", 210:"7π/6", 225:"5π/4", 240:"4π/3", 270:"3π/2", 300:"5π/3", 315:"7π/4", 330:"11π/6", 360:"2π" };
    const rounded = Math.round(deg);
    if (Math.abs(deg - rounded) < 0.1 && labels[rounded]) return labels[rounded];
    const coeff = (deg / 180).toFixed(2);
    if (coeff === "0.00") return "0";
    if (coeff === "1.00") return "π";
    return `${coeff}π`;
  };

  useEffect(() => {
    const formatted = inputMode === 'deg' ? normalizedDeg.toFixed(1) : angleRad.toFixed(2);
    setLocalInputValue(formatted);
  }, [normalizedDeg, angleRad, inputMode]);

  const validateAndApply = (text) => {
    const cleanText = text.toLowerCase().trim();
    if (!cleanText) return;
    let val;
    if (inputMode === 'deg') {
      val = parseFloat(cleanText);
    } else {
      try {
        let evalRad = 0;
        if (cleanText.includes('pi') || cleanText.includes('π')) {
          let processed = cleanText.replace(/π/g, 'pi').replace(/(\d)pi/g, '$1*pi').replace(/pi(\d)/g, 'pi*$1').replace(/pi/g, Math.PI.toString());
          evalRad = new Function(`return ${processed}`)();
        } else {
          evalRad = parseFloat(cleanText);
        }
        val = (evalRad * 180) / Math.PI;
      } catch (err) { 
        setLocalInputValue(inputMode === 'deg' ? normalizedDeg.toFixed(1) : angleRad.toFixed(2));
        return;
      }
    }
    if (!isNaN(val)) {
       val = Math.round(val * 100) / 100;
       if (!isHyp) { val = ((val % 360) + 360) % 360; } else { val = Math.max(-360, Math.min(360, val)); }
       setAngleDeg(val);
    } else {
       setLocalInputValue(inputMode === 'deg' ? normalizedDeg.toFixed(1) : angleRad.toFixed(2));
    }
  };

  const pairMap = { sin: 'cos', cos: 'sin', tan: 'cot', cot: 'tan', sec: 'csc', csc: 'sec', sinh: 'cosh', cosh: 'sinh', tanh: 'coth', coth: 'tanh', sech: 'csch', csch: 'sech' };

  const formatValue = (val) => {
    if (Math.abs(val) > 1e6) return "indéfini";
    if (Math.abs(val) >= 10000) return val.toExponential(2);
    if (Math.abs(val) < 1e-12) return "0.00";
    return val.toFixed(2);
  };

  const renderTangentsLines = (id) => {
    const greyDash = "#94a3b8";
    if (id === 'tan') return !cosIsZero && <line x1={center + radius} y1="-5000" x2={center + radius} y2="5000" stroke={greyDash} strokeWidth="1" strokeDasharray="5" opacity="0.4" />;
    if (id === 'cot') return !sinIsZero && <line x1="-5000" y1={center - radius} x2="5000" y2={center - radius} stroke={greyDash} strokeWidth="1" strokeDasharray="5" opacity="0.4" />;
    if (id === 'sec' || id === 'csc') {
        const tLen = 5000;
        const tx1 = px - tLen * sin;
        const ty1 = py - tLen * cos;
        const tx2 = px + tLen * sin;
        const ty2 = py + tLen * cos;
        return <line x1={tx1} y1={ty1} x2={tx2} y2={ty2} stroke={greyDash} strokeWidth="1" strokeDasharray="5" opacity="0.4" />;
    }
    if (id === 'tanh') return <line x1={center + radius} y1="-5000" x2={center + radius} y2="5000" stroke={greyDash} strokeWidth="1" strokeDasharray="5" opacity="0.4" />;
    if (id === 'coth') return !tanhIsZero && <line x1="-5000" y1={center - radius} x2="5000" y2={center - radius} stroke={greyDash} strokeWidth="1" strokeDasharray="5" opacity="0.4" />;
    if (id === 'sech' || id === 'csch') {
        const slope = sinh / cosh;
        const tLen = 5000;
        const tx1 = hx - tLen;
        const ty1 = hy + tLen * slope;
        const tx2 = hx + tLen;
        const ty2 = hy - tLen * slope;
        return <line x1={tx1} y1={ty1} x2={tx2} y2={ty2} stroke={greyDash} strokeWidth="1" strokeDasharray="5" opacity="0.4" />;
    }
    return null;
  };

  const renderRelatingLines = (id) => {
    const greyDash = "#94a3b8";
    const limit = 15;
    if (id === 'tan' && !sinIsZero && Math.abs(tan) < limit && Math.abs(cot) < limit) return <line x1={center + radius} y1={center - radius * tan} x2={center + radius * cot} y2={center - radius} stroke={greyDash} strokeWidth="1" strokeDasharray="3" opacity="0.5" />;
    if (id === 'cot' && !cosIsZero && Math.abs(tan) < limit && Math.abs(cot) < limit) return <line x1={center + radius * cot} y1={center - radius} x2={center + radius} y2={center - radius * tan} stroke={greyDash} strokeWidth="1" strokeDasharray="3" opacity="0.5" />;
    if (id === 'tanh' && !tanhIsZero && Math.abs(tanh) < limit && Math.abs(coth) < limit) return <line x1={center + radius} y1={center - radius * tanh} x2={center + radius * coth} y2={center - radius} stroke={greyDash} strokeWidth="1" strokeDasharray="3" opacity="0.5" />;
    if (id === 'coth' && !tanhIsZero && Math.abs(tanh) < limit && Math.abs(coth) < limit) return <line x1={center + radius * coth} y1={center - radius} x2={center + radius} y2={center - radius * tanh} stroke={greyDash} strokeWidth="1" strokeDasharray="3" opacity="0.5" />;
    return null;
  };

  const getGeom = (id, isFaint = false) => {
    const color = COLORS[id].hex;
    const op = isFaint ? 0.3 : 1;
    const sw = isFaint ? 2 : 4;
    const limit = 15;
    if (id === 'sin') { if (sinIsZero && !isFaint) return null; return <line x1={px} y1={center} x2={px} y2={py} stroke={color} strokeWidth={sw} opacity={op} />; }
    if (id === 'cos') { if (cosIsZero && !isFaint) return null; return <line x1={center} y1={center} x2={px} y2={center} stroke={color} strokeWidth={sw} opacity={op} />; }
    if (id === 'tan') {
      if (cosIsZero) return null;
      const isTooBig = Math.abs(tan) > limit;
      return <g>
        {!isFaint && <line x1={px} y1={py} x2={center + radius} y2={isTooBig ? (tan > 0 ? -2000 : 2000) : center - radius * tan} stroke={color} strokeWidth="2" strokeDasharray="2" opacity="0.6" />}
        <line x1={center + radius} y1={center} x2={center + radius} y2={isTooBig ? (tan > 0 ? -2000 : 2000) : center - radius * tan} stroke={color} strokeWidth={sw} opacity={op} />
        {!isFaint && !isTooBig && <circle cx={center + radius} cy={center - radius * tan} r={5} fill={color} />}
      </g>;
    }
    if (id === 'cot') {
      if (sinIsZero) return null;
      const isTooBig = Math.abs(cot) > limit;
      return <g>
        {!isFaint && <line x1={px} y1={py} x2={isTooBig ? (cot > 0 ? 2000 : -2000) : center + radius * cot} y2={center - radius} stroke={color} strokeWidth="2" strokeDasharray="2" opacity="0.6" />}
        <line x1={center} y1={center - radius} x2={isTooBig ? (cot > 0 ? 2000 : -2000) : center + radius * cot} y2={center - radius} stroke={color} strokeWidth={sw} opacity={op} />
        {!isFaint && !isTooBig && <circle cx={center + radius * cot} cy={center - radius} r={5} fill={color} />}
      </g>;
    }
    if (id === 'sec') {
        if (cosIsZero) return null;
        const isTooBig = Math.abs(sec) > limit;
        return <g>
          {!isFaint && <line x1={px} y1={py} x2={center + radius * sec} y2={center} stroke={color} strokeWidth="2" strokeDasharray="2" opacity="0.6" />}
          <line x1={center} y1={center} x2={isTooBig ? (sec > 0 ? 2000 : -2000) : center + radius * sec} y2={center} stroke={color} strokeWidth={sw} opacity={op} />
          {!isFaint && !isTooBig && <circle cx={center + radius * sec} cy={center} r={5} fill={color} />}
        </g>;
    }
    if (id === 'csc') {
        if (sinIsZero) return null;
        const isTooBig = Math.abs(csc) > limit;
        return <g>
          {!isFaint && <line x1={px} y1={py} x2={center} y2={center - radius * csc} stroke={color} strokeWidth="2" strokeDasharray="2" opacity="0.6" />}
          <line x1={center} y1={center} x2={center} y2={isTooBig ? (csc > 0 ? -2000 : 2000) : center - radius * csc} stroke={color} strokeWidth={sw} opacity={op} />
          {!isFaint && !isTooBig && <circle cx={center} cy={center - radius * csc} r={5} fill={color} />}
        </g>;
    }
    if (id === 'sinh') { if (sinhIsZero && !isFaint) return null; return <line x1={hx} y1={center} x2={hx} y2={hy} stroke={color} strokeWidth={sw} opacity={op} />; }
    if (id === 'cosh') { return <line x1={center} y1={center} x2={hx} y2={center} stroke={color} strokeWidth={sw} opacity={op} />; }
    if (id === 'tanh') {
      return <g>
        {!isFaint && <line x1={center} y1={center} x2={center + radius} y2={center - radius * tanh} stroke={darkMode ? "#f8fafc" : "#1e293b"} strokeWidth="2" strokeDasharray="2" opacity="0.4" />}
        <line x1={center + radius} y1={center} x2={center + radius} y2={center - radius * tanh} stroke={color} strokeWidth={sw} opacity={op} />
        {!isFaint && <circle cx={center + radius} cy={center - radius * tanh} r={5} fill={color} />}
      </g>;
    }
    if (id === 'coth') {
      if (tanhIsZero) return null;
      const isTooBig = Math.abs(coth) > limit;
      return <g>
        {!isFaint && <line x1={center} y1={center} x2={isTooBig ? (coth > 2000 ? 2000 : -2000) : center + radius * coth} y2={center - radius} stroke={darkMode ? "#f8fafc" : "#1e293b"} strokeWidth="2" strokeDasharray="2" opacity="0.4" />}
        <line x1={center} y1={center - radius} x2={isTooBig ? (coth > 0 ? 2000 : -2000) : center + radius * coth} y2={center - radius} stroke={color} strokeWidth={sw} opacity={op} />
        {!isFaint && !isTooBig && <circle cx={center + radius * coth} cy={center - radius} r={5} fill={color} />}
      </g>;
    }
    if (id === 'sech') {
        return <g>
          {!isFaint && <line x1={hx} y1={hy} x2={center + radius * sech} y2={center} stroke={color} strokeWidth="1.5" strokeDasharray="2" opacity="0.6" />}
          <line x1={center} y1={center} x2={center + radius * sech} y2={center} stroke={color} strokeWidth={sw} opacity={op} />
          {!isFaint && <circle cx={center + radius * sech} cy={center} r={5} fill={color} />}
        </g>;
    }
    if (id === 'csch') {
        if (sinhIsZero) return null;
        const isTooBig = Math.abs(csch) > limit;
        return <g>
          {!isFaint && <line x1={hx} y1={hy} x2={center} y2={isTooBig ? (csch > 2000 ? 2000 : -2000) : center - radius * csch} stroke={color} strokeWidth="1.5" strokeDasharray="2" opacity="0.6" />}
          <line x1={center} y1={center} x2={center} y2={isTooBig ? (csch > 0 ? -2000 : 2000) : center - radius * csch} stroke={color} strokeWidth={sw} opacity={op} />
          {!isFaint && !isTooBig && <circle cx={center} cy={center - radius * csch} r={5} fill={color} />}
        </g>;
    }
    return null;
  };

  const renderDataCards = () => {
    const tabsList = getActiveTabs();
    const valMap = { sin, cos, tan, sec, csc, cot, sinh, cosh, tanh, sech, csch, coth };
    const isIndef = { sin: false, cos: false, tan: cosIsZero, sec: cosIsZero, csc: sinIsZero, cot: sinIsZero, sinh: false, cosh: false, tanh: false, sech: false, csch: sinhIsZero, coth: tanhIsZero };
    const paramLabels = { sin: "Sin (y)", cos: "Cos (x)", tan: "Tan (y/x)", sec: "Sec (1/cos)", csc: "Csc (1/sin)", cot: "Cot (x/y)", sinh: "Sinh (y)", cosh: "Cosh (x)", tanh: "Tanh (y/x)", sech: "Sech (1/cosh)", csch: "Csch (1/sinh)", coth: "Coth (x/y)" };
    return tabsList.map((tabId) => {
      const tabData = COLORS[tabId];
      const val = valMap[tabId];
      const indefinite = isIndef[tabId] || Math.abs(val) > 1e6;
      const bgClass = darkMode ? tabData.darkBg : tabData.lightBg;
      const borderClass = darkMode ? tabData.darkBorder : tabData.lightBorder;
      const textClass = darkMode ? tabData.darkText : tabData.lightText;
      return (
        <div key={tabId} className={`flex flex-col justify-center min-h-[4.5rem] p-[0.75rem] overflow-hidden ${bgClass} ${borderClass} rounded-[0.5rem] border text-center shadow-sm`}>
          <div className={`mb-[0.25rem] ${textClass} text-[0.65rem] font-bold uppercase truncate`}>{paramLabels[tabId]}</div>
          <div className={`${darkMode ? 'text-slate-100' : 'text-slate-900'} whitespace-nowrap font-mono text-[0.9rem] font-bold tracking-tight sm:text-[1rem]`}>{indefinite ? "indéfini" : formatValue(val)}</div>
        </div>
      );
    });
  };

  const info = EXPLANATIONS[activeTab];
  const activeColorData = COLORS[activeTab];
  const boxBg = darkMode ? activeColorData.darkBg : activeColorData.lightBg;
  const boxBorder = darkMode ? activeColorData.darkBorder : activeColorData.lightBorder;
  const boxText = darkMode ? activeColorData.darkText : activeColorData.lightText;
  const gridColor = darkMode ? "#334155" : "#cbd5e1";
  const mainStroke = darkMode ? "#f8fafc" : "#1e293b";

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen p-[1rem] transition-colors duration-300 font-sans sm:p-[2rem] ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <style>{`
        .custom-slider .relative span[data-orientation="horizontal"] { background-color: ${darkMode ? '#1e293b' : '#e2e8f0'} !important; }
        .custom-slider .relative span[style*="left: 0%"] { background-color: #6366f1 !important; }
        .latex-font { font-family: 'Times New Roman', serif; font-style: italic; }
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
        .pretty-wrap { text-wrap: pretty; }
      `}</style>
      <Card className={`flex flex-col w-full max-w-[60rem] transition-colors duration-300 overflow-x-auto shadow-xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <CardHeader className={`relative z-20 flex flex-col items-center p-[1.5rem] transition-colors duration-300 border-b text-center ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
          <div className="flex flex-row items-center justify-between w-full mb-[0.5rem] gap-4">
            <div className="flex-grow">
              <CardTitle className={`font-bold text-[1.5rem] sm:text-[1.75rem] text-center ${darkMode ? 'text-white' : 'text-slate-800'}`}>Laboratoire de Trigonométrie</CardTitle>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className={`relative p-[0.5rem] transition-all rounded-full shrink-0 shadow-sm ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'}`}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <p className="mb-[1.5rem] text-slate-500 text-[0.7rem] sm:text-[0.9rem]">Explorez les fonctions mathématiques par la géométrie</p>
          
          <div className="flex flex-col items-center gap-[1rem] w-full">
            <div className={`flex gap-[0.25rem] p-[0.25rem] transition-colors rounded-[0.5rem] overflow-x-auto no-scrollbar max-w-full ${darkMode ? 'bg-slate-800' : 'bg-slate-200/50'}`}>
              <button onClick={() => handleMainChange('TRIG')} className={`px-[1rem] py-[0.5rem] transition-all rounded-[0.375rem] whitespace-nowrap text-[0.7rem] font-semibold sm:text-[0.9rem] ${mainCat === 'TRIG' ? (darkMode ? 'bg-slate-700 text-blue-400 shadow-sm' : 'bg-white text-indigo-700 shadow-sm') : 'text-slate-500 hover:text-slate-400'}`}>Trigonométrique</button>
              <button onClick={() => handleMainChange('HYP')} className={`px-[1rem] py-[0.5rem] transition-all rounded-[0.375rem] whitespace-nowrap text-[0.7rem] font-semibold sm:text-[0.9rem] ${mainCat === 'HYP' ? (darkMode ? 'bg-slate-700 text-blue-400 shadow-sm' : 'bg-white text-indigo-700 shadow-sm') : 'text-slate-500 hover:text-slate-400'}`}>Hyperbolique</button>
            </div>
            <div className="flex gap-[0.5rem] overflow-x-auto no-scrollbar max-w-full">
              <button onClick={() => handleSubChange('NORMAL')} className={`px-[0.75rem] py-[0.25rem] transition-all border rounded-full whitespace-nowrap text-[0.7rem] font-semibold sm:text-[0.9rem] ${subCat === 'NORMAL' ? (darkMode ? 'bg-slate-700 border-slate-600 text-slate-100' : 'bg-white border-slate-300 text-slate-800 shadow-sm') : 'bg-transparent border-transparent text-slate-500 hover:opacity-80'}`}>Normales</button>
              <button onClick={() => handleSubChange('INVERSE')} className={`px-[0.75rem] py-[0.25rem] transition-all border rounded-full whitespace-nowrap text-[0.7rem] font-semibold sm:text-[0.9rem] ${subCat === 'INVERSE' ? (darkMode ? 'bg-slate-700 border-slate-600 text-slate-100' : 'bg-white border-slate-300 text-slate-800 shadow-sm') : 'bg-transparent border-transparent text-slate-500 hover:opacity-80'}`}>Inverses</button>
            </div>
            <div className="flex gap-[0.5rem] pb-[0.25rem] overflow-x-auto no-scrollbar max-w-full">
              {getActiveTabs().map(tabId => {
                const tabData = COLORS[tabId];
                return ( <button key={tabId} onClick={() => handleTabClick(tabId)} className={`px-[0.75rem] py-[0.25rem] transition-all border rounded-full whitespace-nowrap text-[0.65rem] font-bold sm:text-[0.8rem] ${activeTab === tabId ? `bg-white ${darkMode ? tabData.darkText : tabData.lightText} shadow-sm` : 'bg-transparent border-transparent text-slate-500 hover:opacity-80'}`} style={activeTab === tabId ? {borderColor: tabData.hex, backgroundColor: darkMode ? '#1e293b' : 'white'} : {}}>{tabData.label}</button> )
              })}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="relative z-10 p-[1rem] sm:p-[1.5rem]">
          <div className="flex flex-col items-stretch gap-[1.5rem] h-full lg:flex-row sm:gap-[2rem]">
            <div className={`relative flex justify-center items-center w-full lg:w-[50%] min-h-[25rem] lg:min-h-[30rem] p-[0.5rem] transition-colors border rounded-[1rem] shadow-inner overflow-x-auto no-scrollbar ${darkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
              <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full max-w-[28rem] max-h-[28rem] overflow-visible">
                <rect width="100%" height="100%" fill={darkMode ? "#020617" : "white"} />
                <line x1="-5000" y1={center} x2="5000" y2={center} stroke={gridColor} strokeWidth="1" />
                <line x1={center} y1="-5000" x2={center} y2="5000" stroke={gridColor} strokeWidth="1" />
                {isHyp ? <path d={getHyperbolaPath()} fill="none" stroke={gridColor} strokeWidth="2" /> : <circle cx={center} cy={center} r={radius} fill="none" stroke={gridColor} strokeWidth="2" />}
                {renderTangentsLines(activeTab)}
                {renderRelatingLines(activeTab)}
                {!isHyp && ( <path d={`M ${center + 25} ${center} A 25 25 0 ${normalizedDeg > 180 ? 1 : 0} 0 ${center + 25 * Math.cos(-angleRad)} ${center + 25 * Math.sin(-angleRad)}`} fill="none" stroke={darkMode ? "#60a5fa" : "#6366f1"} strokeWidth="3" /> )}
                {getGeom(pairMap[activeTab], true)}
                {getGeom(activeTab, false)}
                <line x1={center} y1={center} x2={isHyp ? hx : px} y2={isHyp ? hy : py} stroke={mainStroke} strokeWidth="3" opacity="1" />
                <circle cx={isHyp ? hx : px} cy={isHyp ? hy : py} r={6} fill={mainStroke} />
              </svg>
            </div>
            
            <div className="flex flex-col gap-[1.5rem] w-full lg:w-[50%] h-full">
              <div className={`shrink-0 flex flex-col gap-[1rem] p-[1rem] transition-colors border rounded-[0.75rem] overflow-x-auto no-scrollbar ${darkMode ? 'bg-slate-800/50 border-slate-700 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                <div className="flex flex-wrap items-center justify-between gap-[0.5rem] text-[0.75rem] font-bold sm:text-[0.9rem]">
                  <div className="flex items-center gap-[0.5rem] whitespace-nowrap">
                    <span>{isHyp ? 'Paramètre t :' : 'Angle :'}</span>
                    <button onClick={() => setInputMode('deg')} className={`px-[0.375rem] py-[0.125rem] transition-colors rounded text-[0.65rem] sm:text-[0.75rem] ${inputMode === 'deg' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-400'}`}>{normalizedDeg.toFixed(0)}°</button>
                    <span className="text-slate-300">|</span>
                    <button onClick={() => setInputMode('rad')} className={`px-[0.375rem] py-[0.125rem] transition-colors rounded text-[0.65rem] sm:text-[0.75rem] ${inputMode === 'rad' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-400'}`}>{getPreciseRadianLabel(normalizedDeg)}</button>
                  </div>
                  <div className={`flex items-center gap-[0.375rem] px-[0.5rem] py-[0.25rem] transition-colors border rounded shadow-sm ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <input type="text" value={localInputValue} onChange={(e) => setLocalInputValue(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { validateAndApply(localInputValue); e.currentTarget.blur(); } }} onBlur={() => validateAndApply(localInputValue)} className={`w-[4.5rem] bg-transparent outline-none border-none font-mono text-[0.7rem] text-right sm:text-[0.8rem] ${darkMode ? 'text-white' : 'text-slate-900'}`} />
                    <span onClick={() => setInputMode(inputMode === 'deg' ? 'rad' : 'deg')} className="pl-[0.375rem] transition-colors border-l cursor-pointer select-none text-[0.6rem] font-bold uppercase text-slate-400 hover:text-indigo-500">{inputMode}</span>
                  </div>
                </div>
                <Slider value={[normalizedDeg]} onValueChange={(val) => setAngleDeg(val[0])} max={isHyp ? 360 : 360} min={isHyp ? -360 : 0} step={1} className="custom-slider" />
              </div>
              
              <div className="shrink-0 grid grid-cols-1 gap-[0.5rem] sm:grid-cols-3 sm:gap-[0.75rem]">{renderDataCards()}</div>
              
              <div className={`flex flex-col gap-[0.5rem] min-h-[22rem] max-h-[22rem] p-[1rem] sm:p-[1.25rem] transition-colors border rounded-[0.75rem] overflow-x-auto no-scrollbar ${boxBg} ${boxBorder} ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                <div className="shrink-0 flex items-center justify-between mb-[0.25rem]">
                   <h4 className={`text-[0.85rem] font-bold uppercase tracking-tight sm:text-[1rem] ${boxText}`}>{infoTab === 'CONCEPT' ? "C'est quoi ?" : infoTab === 'TAYLOR' ? "Série de Taylor" : "Formule d'Euler"}</h4>
                   <div className={`flex p-[0.125rem] transition-colors border rounded-[0.5rem] ${darkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-white/50 border-slate-200'}`}>
                      <button onClick={() => setInfoTab('CONCEPT')} title="Concept" className={`p-[0.375rem] transition-all rounded-[0.375rem] ${infoTab === 'CONCEPT' ? (darkMode ? 'bg-slate-700 text-blue-400' : 'bg-white text-indigo-600 shadow-sm') : 'text-slate-400 hover:text-slate-300'}`}><BookOpen size={18}/></button>
                      <button onClick={() => setInfoTab('TAYLOR')} title="Taylor" className={`p-[0.375rem] transition-all rounded-[0.375rem] ${infoTab === 'TAYLOR' ? (darkMode ? 'bg-slate-700 text-blue-400' : 'bg-white text-indigo-600 shadow-sm') : 'text-slate-400 hover:text-slate-300'}`}><IconSigma size={18}/></button>
                      <button onClick={() => setInfoTab('EULER')} title="Euler" className={`p-[0.375rem] transition-all rounded-[0.375rem] ${infoTab === 'EULER' ? (darkMode ? 'bg-slate-700 text-blue-400' : 'bg-white text-indigo-600 shadow-sm') : 'text-slate-400 hover:text-slate-300'}`}><IconExp size={18}/></button>
                   </div>
                </div>
                
                <div className="flex flex-col justify-center flex-grow overflow-x-auto no-scrollbar">
                  {infoTab === 'CONCEPT' && (
                    <div className="flex flex-col gap-[0.75rem] overflow-y-auto no-scrollbar animate-in fade-in duration-300">
                      <p className="leading-normal"><strong>{info.title}</strong> {info.desc}</p>
                      <p className="leading-normal font-semibold">Concept : <span className="font-normal">{info.concept}</span></p>
                      <div className={`italic opacity-90 pretty-wrap border-l-[0.25rem] ${boxBorder.replace('border-', 'border-l-')} py-[0.25rem] pl-[0.75rem] text-[0.7rem] sm:text-[0.8rem]`}>
                        {info.detail}
                      </div>
                    </div>
                  )}
                  
                  {infoTab === 'TAYLOR' && (
                    <div className="flex flex-col items-center gap-[1rem] py-[0.5rem] animate-in fade-in duration-300">
                      <p className="text-[0.7rem] opacity-80 sm:text-[0.8rem]">Approximation polynomiale :</p>
                      <div className={`flex items-center justify-center w-full p-[1rem] transition-colors border border-dashed rounded-[0.5rem] overflow-x-auto no-scrollbar text-[0.9rem] sm:p-[1.5rem] sm:text-[1.1rem] ${darkMode ? 'bg-slate-900/40' : 'bg-white/40'} ${boxBorder}`}>
                        {info.taylor}
                      </div>
                      <p className="text-center italic opacity-60 text-[0.6rem] sm:text-[0.7rem]">Cette série permet de calculer la fonction pour n'importe quelle valeur de x.</p>
                    </div>
                  )}
                  
                  {infoTab === 'EULER' && (
                    <div className="flex flex-col items-center gap-[1rem] py-[0.5rem] animate-in fade-in duration-300">
                      <p className="text-[0.7rem] opacity-80 sm:text-[0.8rem]">Lien avec l'exponentielle complexe :</p>
                      <div className={`flex items-center justify-center w-full p-[1rem] transition-colors border border-dashed rounded-[0.5rem] overflow-x-auto no-scrollbar text-[0.9rem] sm:p-[1.5rem] sm:text-[1.1rem] ${darkMode ? 'bg-slate-900/40' : 'bg-white/40'} ${boxBorder}`}>
                        {info.euler}
                      </div>
                      <p className="text-center italic opacity-60 text-[0.6rem] sm:text-[0.7rem]">L'unité imaginaire $i$ relie la géométrie circulaire aux fonctions exponentielles.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default function App() { return <TangentVisualizer />; }