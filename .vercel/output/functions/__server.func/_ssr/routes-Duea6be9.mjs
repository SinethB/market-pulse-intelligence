import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as TriangleAlert, c as ScanSearch, d as Layers, f as FileSpreadsheet, i as Upload, l as RotateCcw, m as ArrowUpRight, n as Wallet, o as TrendingUp, p as Compass, r as Users, s as ShoppingBag, t as X, u as Receipt } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1, u as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as require_papaparse } from "../_libs/papaparse.mjs";
import { a as Area, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Duea6be9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_papaparse = /* @__PURE__ */ __toESM(require_papaparse());
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,border-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-surface-2 text-fg border border-border hover:bg-accent",
			outline: "border border-border bg-transparent text-fg hover:bg-accent",
			ghost: "text-muted hover:text-fg hover:bg-accent",
			destructive: "bg-down text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-bg/80 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = (0, import_react.forwardRef)(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-[50%] left-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-xl border border-border bg-surface p-6 shadow-[var(--shadow-panel)]", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-md p-1 text-muted hover:text-fg focus-visible:ring-2 focus-visible:ring-ring/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 pr-6", className),
		...props
	});
}
var DialogTitle = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-2xl tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var SRI_LANKA_MAP = {
	viewBox: "0 0 421.4 720",
	districts: [
		{
			"id": "colombo",
			"name": "Colombo",
			"province": "Western",
			"population": 248e4,
			"path": "M55.9 516.8L52.0 524.1L50.7 520.1L51.2 522.8L47.8 522.8L49.1 519.2L47.7 522.8L50.8 524.0L61.0 562.7L59.5 552.2L64.1 556.9L68.7 557.0L76.8 554.7L84.4 547.0L89.7 549.2L92.0 545.2L99.1 553.3L98.5 547.2L101.5 545.4L113.3 544.8L112.0 539.2L108.6 537.7L115.0 527.6L114.4 524.1L117.0 523.6L115.9 517.5L99.9 517.6L95.4 521.7L94.5 528.5L88.9 529.5L81.9 526.4L80.7 522.5L76.0 524.5L61.1 522.4L55.9 516.8Z",
			"cx": 80.9,
			"cy": 533.4
		},
		{
			"id": "gampaha",
			"name": "Gampaha",
			"province": "Western",
			"population": 243e4,
			"path": "M109.4 517.1L106.5 503.0L115.2 490.2L106.5 491.1L103.5 480.3L110.2 478.9L113.0 469.7L102.5 456.8L99.8 455.5L88.6 463.6L79.5 457.1L69.0 465.4L65.2 463.5L65.8 465.7L62.4 466.9L62.4 464.2L51.0 465.5L48.7 476.9L55.1 483.6L56.6 493.3L54.6 491.2L53.5 495.6L47.8 481.5L49.0 477.9L46.7 477.7L58.2 521.2L76.0 524.5L80.7 522.5L81.9 526.4L88.9 529.5L94.5 528.5L95.4 521.7L99.9 517.6L109.4 517.1Z",
			"cx": 79.6,
			"cy": 489.4
		},
		{
			"id": "kalutara",
			"name": "Kalutara",
			"province": "Western",
			"population": 132e4,
			"path": "M144.3 613.5L131.1 593.7L129.5 589.3L132.8 588.1L130.8 583.8L122.5 578.4L121.5 572.8L115.7 567.0L108.5 544.7L104.2 543.9L98.5 547.2L99.1 553.3L92.0 545.2L89.7 549.2L84.4 547.0L76.8 554.7L68.7 557.0L64.1 556.9L59.0 552.5L75.2 598.5L74.0 607.6L78.2 613.3L81.7 612.0L101.0 624.0L111.1 626.0L116.0 621.5L120.1 622.1L129.7 631.1L128.6 619.4L144.3 613.5Z",
			"cx": 104.4,
			"cy": 584.2
		},
		{
			"id": "kandy",
			"name": "Kandy",
			"province": "Central",
			"population": 146e4,
			"path": "M246.9 427.9L239.7 427.7L235.2 433.1L233.9 430.3L225.4 430.7L215.1 438.5L204.3 430.3L199.7 433.4L201.6 438.8L199.2 445.6L191.5 446.1L176.3 433.3L171.8 434.7L174.6 440.0L167.8 441.0L166.8 445.8L158.2 441.5L160.1 444.5L156.5 450.1L157.9 451.6L152.1 450.4L152.1 455.2L161.6 463.5L161.3 467.2L168.1 471.2L167.2 476.9L173.2 483.6L165.0 490.9L155.4 493.8L159.9 501.8L158.1 507.8L164.4 508.7L174.1 523.6L178.3 522.9L182.6 514.2L173.9 501.9L171.7 502.9L172.0 500.4L186.8 499.4L190.6 495.3L197.5 497.0L211.7 478.6L208.5 465.4L220.8 479.3L230.7 479.3L231.4 481.7L233.8 478.5L246.7 479.0L252.8 475.4L254.2 472.5L246.1 441.1L246.9 427.9Z",
			"cx": 192.9,
			"cy": 466.4
		},
		{
			"id": "matale",
			"name": "Matale",
			"province": "Central",
			"population": 52e4,
			"path": "M249.5 387.2L231.2 388.3L230.1 394.5L225.9 390.8L218.4 395.9L213.1 394.8L210.0 391.7L212.3 390.6L210.0 374.9L216.0 372.7L220.2 351.8L226.0 345.1L219.3 341.5L214.7 345.1L213.2 339.5L209.2 336.4L200.5 340.0L196.4 346.2L192.3 345.6L191.5 353.4L186.1 361.5L182.1 363.8L178.0 361.6L176.1 365.0L164.9 369.0L164.3 371.9L173.4 390.1L173.4 401.1L178.3 407.6L177.8 412.8L174.0 417.0L177.6 424.4L177.5 436.3L191.5 446.1L199.2 445.6L201.6 438.8L199.7 433.4L204.3 430.3L215.1 438.5L225.4 430.7L233.9 430.3L235.2 433.1L239.7 427.7L246.9 427.9L249.5 387.2Z",
			"cx": 205,
			"cy": 390.6
		},
		{
			"id": "nuwara-eliya",
			"name": "Nuwara Eliya",
			"province": "Central",
			"population": 77e4,
			"path": "M242.0 478.2L233.8 478.5L231.4 481.7L230.7 479.3L218.6 478.5L208.5 465.4L211.7 478.6L197.5 497.0L190.6 495.3L186.8 499.4L172.0 500.4L171.7 502.9L173.9 501.9L182.6 514.2L178.3 522.9L174.1 523.6L164.4 508.7L158.5 508.3L159.2 510.2L153.3 514.5L155.4 519.3L153.3 528.3L164.5 533.0L166.8 539.9L163.4 544.7L163.9 550.8L191.5 556.7L192.7 554.8L207.2 555.4L221.1 549.4L223.2 546.1L219.2 543.2L223.3 540.3L218.5 530.4L212.7 527.8L219.6 527.3L227.5 517.0L237.4 514.8L239.1 506.6L245.3 499.6L242.0 478.2Z",
			"cx": 198.2,
			"cy": 514.7
		},
		{
			"id": "galle",
			"name": "Galle",
			"province": "Southern",
			"population": 114e4,
			"path": "M76.2 611.0L89.3 654.6L99.9 670.1L116.0 683.7L119.6 682.2L120.4 686.9L144.9 693.6L146.0 686.3L151.6 684.6L146.1 681.9L145.7 678.3L148.4 678.6L154.3 671.5L145.2 663.8L145.5 655.3L148.1 654.6L144.7 649.3L152.2 650.5L154.7 645.9L143.7 631.1L148.4 629.6L156.9 637.4L162.4 638.2L164.1 635.5L158.0 626.5L163.8 621.9L150.9 619.3L142.2 613.3L128.6 619.4L129.7 631.1L120.1 622.1L116.0 621.5L111.1 626.0L101.0 624.0L93.5 617.7L76.2 611.0Z",
			"cx": 133.8,
			"cy": 647.5
		},
		{
			"id": "hambantota",
			"name": "Hambantota",
			"province": "Southern",
			"population": 65e4,
			"path": "M194.3 634.4L192.0 635.0L192.7 642.5L188.8 643.7L183.6 653.0L188.6 658.2L192.6 657.5L190.5 664.6L198.8 667.7L196.0 670.0L198.1 676.8L191.7 680.3L199.2 684.6L197.4 689.5L206.0 692.7L207.9 688.2L213.5 686.8L218.0 681.4L227.3 680.5L229.1 677.7L251.5 670.2L267.6 668.8L268.2 665.5L273.4 666.9L292.1 656.5L307.4 653.1L327.2 636.5L334.6 633.6L338.5 626.8L355.1 618.1L373.8 598.7L361.7 593.2L356.6 586.6L355.1 589.8L349.1 591.0L334.8 601.3L333.0 616.6L319.4 615.4L314.9 619.7L299.5 623.4L295.2 628.3L290.4 627.7L283.2 617.0L278.5 619.3L275.0 614.3L263.6 613.8L262.0 616.0L259.8 614.2L257.8 619.5L252.8 620.1L254.5 627.7L237.8 636.1L243.2 646.1L240.9 648.0L230.9 644.8L226.8 640.4L216.4 641.2L200.1 634.3L194.3 634.4Z",
			"cx": 257.3,
			"cy": 641.4
		},
		{
			"id": "matara",
			"name": "Matara",
			"province": "Southern",
			"population": 86e4,
			"path": "M144.4 693.9L150.8 695.8L154.1 692.7L156.9 694.3L155.1 697.2L156.9 698.1L174.8 698.1L180.7 702.0L190.7 695.8L203.3 694.9L203.3 691.1L197.4 689.5L198.4 683.5L193.7 683.4L191.7 680.3L198.1 676.8L196.0 670.0L198.4 666.8L190.5 664.6L192.6 657.5L188.6 658.2L183.6 653.0L188.8 643.7L192.7 642.5L192.0 635.0L195.2 631.7L192.1 629.0L192.8 626.1L184.1 627.5L185.4 618.7L173.4 618.7L170.7 622.5L158.0 626.5L164.1 635.5L160.6 638.9L148.4 629.6L143.9 630.6L154.7 645.9L152.2 650.5L144.7 649.3L148.1 654.6L145.5 655.3L145.2 663.8L154.3 671.5L148.4 678.6L145.7 678.3L146.1 681.9L151.6 684.6L146.0 686.3L144.4 693.9Z",
			"cx": 171.4,
			"cy": 663.8
		},
		{
			"id": "jaffna",
			"name": "Jaffna",
			"province": "Northern",
			"population": 61e4,
			"path": "M185.9 83.7L140.9 47.9L121.1 19.3L115.1 18.0L95.9 22.7L83.0 20.2L84.7 21.1L73.3 23.3L62.3 29.6L69.0 43.5L73.8 36.1L72.6 42.0L78.0 43.8L80.6 49.7L101.6 57.7L92.6 52.1L91.8 48.8L112.9 62.5L114.4 61.6L110.2 60.0L106.3 50.0L122.5 56.6L129.5 43.2L135.8 50.5L155.7 63.6L160.1 72.9L185.9 83.7ZM75.3 55.3L75.6 52.9L65.1 48.5L67.1 45.8L62.2 46.6L63.6 50.2L58.8 41.9L50.9 41.1L53.7 48.5L57.3 47.6L55.7 52.3L61.1 56.3L64.2 53.4L73.3 57.0L75.1 55.4L74.6 58.2L72.3 57.8L76.3 59.7L79.8 54.2L77.5 50.3L75.3 55.3ZM50.6 57.1L53.1 58.5L49.8 60.7L45.6 54.8L44.3 63.1L54.4 64.2L54.6 58.0L50.6 57.1ZM29.1 71.5L21.4 67.2L18.0 68.4L18.7 75.7L29.9 81.1L31.9 78.0L29.1 71.5Z",
			"cx": 109.5,
			"cy": 46.8
		},
		{
			"id": "kilinochchi",
			"name": "Kilinochchi",
			"province": "Northern",
			"population": 13e4,
			"path": "M122.5 56.6L137.5 66.0L144.9 74.3L148.4 73.2L146.0 74.0L145.7 79.4L137.2 81.3L135.9 84.4L132.3 83.3L131.5 86.8L130.6 84.4L119.2 81.1L126.4 81.0L121.4 75.6L127.1 77.5L117.1 70.6L107.9 69.0L89.0 57.2L87.4 59.3L103.8 70.5L110.5 79.2L103.5 87.8L87.6 95.9L89.3 106.2L99.6 112.0L97.4 115.8L98.3 127.4L116.1 123.1L115.3 115.6L120.0 112.0L146.7 111.4L148.9 104.7L168.1 103.7L170.4 93.2L179.6 100.6L179.8 92.7L183.8 89.6L184.5 84.2L160.1 72.9L155.7 63.6L135.8 50.5L129.5 43.2L122.5 56.6ZM75.6 110.4L73.5 114.0L78.7 116.6L75.6 110.4ZM80.1 81.5L81.4 79.9L79.3 79.3L80.1 81.5Z",
			"cx": 130.6,
			"cy": 84.4
		},
		{
			"id": "mannar",
			"name": "Mannar",
			"province": "Northern",
			"population": 11e4,
			"path": "M98.3 127.4L85.6 161.1L76.7 164.7L76.1 168.1L69.3 173.2L63.0 174.6L67.2 181.2L63.7 196.7L71.4 212.1L69.3 228.2L64.5 239.5L85.9 247.4L87.9 227.4L86.1 221.0L98.1 225.2L119.1 219.8L107.9 207.8L109.1 203.3L112.6 205.0L118.1 194.0L129.8 195.3L148.0 188.9L144.1 175.1L138.9 171.5L108.6 172.6L111.2 167.6L108.8 164.5L112.1 155.9L116.4 154.4L117.4 144.2L112.2 133.2L111.5 122.5L98.3 127.4ZM59.5 171.7L58.7 170.1L65.7 167.0L58.1 161.7L53.0 153.3L65.8 162.3L54.5 151.3L35.1 145.4L24.7 148.0L26.1 149.5L24.1 150.7L34.6 152.1L45.8 157.8L59.5 171.7ZM61.5 173.3L61.5 170.6L59.6 171.7L61.5 173.3ZM63.5 174.1L63.3 171.5L61.6 174.0L63.5 174.1Z",
			"cx": 99.6,
			"cy": 183.4
		},
		{
			"id": "mullaitivu",
			"name": "Mullaitivu",
			"province": "Northern",
			"population": 1e5,
			"path": "M184.5 84.2L183.8 89.6L179.8 92.7L179.6 100.6L170.4 93.2L168.1 103.7L148.9 104.7L146.7 111.4L124.1 111.1L115.3 115.6L116.1 123.1L111.5 122.5L112.2 133.2L117.4 144.2L116.4 154.4L112.1 155.9L108.6 172.6L137.2 171.1L146.0 165.5L153.4 158.7L152.1 148.1L148.3 148.1L148.2 143.8L163.3 143.4L167.1 150.6L170.0 150.7L175.2 145.2L179.5 144.6L179.0 142.0L190.2 143.5L191.2 150.3L198.0 151.0L195.5 158.4L202.5 155.0L214.5 162.2L210.8 175.0L228.8 171.0L237.6 166.4L237.7 162.2L235.4 164.2L230.0 159.5L233.5 155.3L245.2 165.8L230.4 140.6L218.6 112.8L194.4 90.6L202.2 102.1L193.4 93.3L194.3 90.5L184.5 84.2Z",
			"cx": 175.7,
			"cy": 135.6
		},
		{
			"id": "vavuniya",
			"name": "Vavuniya",
			"province": "Northern",
			"population": 185e3,
			"path": "M119.1 219.8L119.4 228.7L125.8 231.9L128.3 240.7L136.8 243.2L139.2 238.6L144.1 236.6L144.3 230.0L155.2 218.3L168.3 223.5L177.0 216.3L191.4 199.8L186.8 192.4L180.8 190.5L181.4 186.7L193.8 186.4L208.6 180.5L214.5 162.2L202.5 155.0L195.5 158.4L198.0 151.0L191.2 150.3L188.6 142.9L179.0 142.0L179.5 144.6L175.2 145.2L170.0 150.7L167.1 150.6L163.3 143.4L148.2 143.8L148.3 148.1L152.1 148.1L153.4 158.7L137.2 171.1L144.1 175.1L148.0 188.9L129.8 195.3L118.1 194.0L112.6 205.0L109.1 203.3L107.9 207.8L119.1 219.8Z",
			"cx": 158.4,
			"cy": 186.2
		},
		{
			"id": "ampara",
			"name": "Ampara",
			"province": "Eastern",
			"population": 72e4,
			"path": "M373.8 598.7L383.3 583.7L385.1 570.6L394.2 554.4L393.7 545.8L396.7 541.7L395.3 539.1L403.4 509.3L399.6 492.0L401.1 456.6L392.2 429.3L388.6 431.1L385.7 429.1L382.9 432.9L376.8 433.7L366.1 443.6L363.7 421.5L358.5 424.5L336.9 423.2L326.3 413.7L328.4 401.1L315.0 396.7L307.8 385.1L293.1 384.2L292.8 394.5L288.4 400.2L271.7 392.7L267.7 386.6L249.5 387.2L250.4 397.7L247.5 404.1L253.7 409.2L254.0 416.7L258.6 425.0L264.6 423.8L279.7 413.7L283.9 413.0L286.9 416.2L285.8 430.9L282.9 435.7L286.1 444.0L284.9 447.3L289.4 455.1L293.9 454.7L300.7 471.2L307.2 467.3L306.8 454.3L314.8 453.2L318.2 448.5L316.2 441.6L321.5 440.5L321.9 437.6L330.3 433.2L334.2 433.8L331.3 438.1L333.9 439.6L336.3 454.2L334.2 456.5L341.1 462.5L341.8 470.8L347.0 475.2L341.7 478.7L337.9 487.2L341.5 496.2L357.6 501.3L356.4 508.7L361.6 520.2L356.6 586.6L361.7 593.2L373.8 598.7Z",
			"cx": 329.2,
			"cy": 457.7
		},
		{
			"id": "batticaloa",
			"name": "Batticaloa",
			"province": "Eastern",
			"population": 57e4,
			"path": "M392.2 429.3L387.1 407.7L373.5 383.3L362.6 375.7L358.6 368.5L356.1 369.3L351.9 365.6L348.9 356.2L352.2 352.6L347.8 348.5L340.1 353.7L341.6 350.2L346.3 348.9L344.9 343.8L347.1 340.6L339.4 339.2L333.2 331.1L331.8 319.2L327.7 314.9L321.9 295.2L312.9 293.7L312.6 291.6L307.2 292.9L305.3 294.6L304.4 333.4L310.2 349.5L301.4 347.9L292.3 352.6L290.3 369.4L293.1 384.2L307.8 385.1L315.0 396.7L328.4 401.1L326.3 413.7L336.9 423.2L358.5 424.5L363.7 421.5L366.1 443.6L376.8 433.7L382.9 432.9L385.7 429.1L388.6 431.1L392.2 429.3Z",
			"cx": 341,
			"cy": 369
		},
		{
			"id": "trincomalee",
			"name": "Trincomalee",
			"province": "Eastern",
			"population": 42e4,
			"path": "M210.8 175.0L208.6 180.5L218.9 178.8L229.1 184.5L236.2 192.4L230.5 204.4L236.4 219.7L233.0 230.0L241.7 242.2L242.2 250.0L249.8 255.7L243.4 261.9L238.2 279.8L241.1 278.8L247.9 284.0L249.4 290.9L275.5 293.0L280.1 297.6L285.9 298.2L288.3 307.2L284.7 312.2L291.6 311.3L294.7 299.1L301.2 293.0L305.3 294.6L312.6 291.6L312.9 293.7L321.9 295.2L319.4 275.9L311.6 251.0L306.2 246.9L299.9 250.0L299.6 257.4L292.5 259.3L286.6 256.6L282.2 249.2L277.3 250.0L275.4 253.3L272.5 250.8L278.2 243.4L282.1 246.8L283.7 245.3L284.6 249.8L288.2 249.7L284.6 238.8L289.4 236.6L287.2 239.9L290.7 238.4L291.5 245.0L294.0 242.8L293.9 236.9L291.6 237.2L289.3 231.8L290.4 224.5L265.2 187.0L263.1 188.9L259.6 186.2L245.5 166.6L245.3 172.1L241.1 176.5L235.0 173.0L235.1 169.5L239.4 169.0L236.9 167.7L238.7 165.3L228.8 171.0L210.8 175.0Z",
			"cx": 268.6,
			"cy": 238.4
		},
		{
			"id": "kurunegala",
			"name": "Kurunegala",
			"province": "North Western",
			"population": 171e4,
			"path": "M96.0 304.1L98.3 321.8L104.9 327.0L101.4 344.7L104.0 348.8L101.3 350.0L97.6 347.3L95.5 353.6L90.9 353.7L89.8 360.8L79.4 368.1L78.1 383.5L70.6 387.5L68.1 391.6L72.0 393.3L71.3 395.3L66.0 395.4L66.9 399.6L62.1 405.5L62.0 424.9L68.3 464.9L79.5 457.1L88.6 463.6L99.8 455.5L112.2 468.1L126.7 457.6L136.9 457.1L139.9 450.2L138.4 445.5L146.2 444.0L149.6 446.3L150.1 450.9L157.4 452.1L160.1 444.5L158.2 441.5L166.8 445.8L167.8 441.0L174.6 440.0L171.8 434.7L176.3 433.3L178.1 429.6L174.0 417.0L177.8 412.8L178.3 407.6L173.4 401.1L171.3 384.2L168.3 378.3L165.5 378.0L164.8 370.7L159.5 364.8L161.4 360.0L158.1 348.1L150.8 346.7L150.9 331.0L142.4 328.5L131.7 318.1L124.4 318.4L96.0 304.1Z",
			"cx": 125.4,
			"cy": 395.7
		},
		{
			"id": "puttalam",
			"name": "Puttalam",
			"province": "North Western",
			"population": 82e4,
			"path": "M64.5 239.5L63.8 242.8L56.0 244.9L54.8 259.8L51.2 264.7L50.3 284.2L45.6 296.9L42.0 297.8L47.3 303.2L49.9 314.6L41.9 325.4L50.0 336.1L47.1 339.1L47.3 353.7L47.4 345.4L45.3 346.9L47.7 342.2L36.4 340.8L32.8 336.2L36.1 327.5L32.9 325.9L31.2 317.1L35.0 306.9L33.0 303.4L36.1 299.4L38.6 300.0L39.8 292.9L31.9 298.7L37.5 291.8L35.3 292.4L35.8 287.9L41.4 271.5L32.5 297.5L25.2 301.8L27.5 328.6L42.8 387.6L41.9 419.1L51.0 465.5L62.4 464.2L62.4 466.9L65.8 465.7L65.2 463.5L68.4 464.1L62.0 424.9L62.1 405.5L66.9 399.6L66.0 395.4L71.3 395.3L72.0 393.3L68.1 391.6L70.6 387.5L78.1 383.5L79.4 368.1L89.8 360.8L90.9 353.7L95.5 353.6L97.6 347.3L101.3 350.0L104.0 348.8L101.4 344.7L104.9 327.0L98.3 321.8L95.1 302.0L84.9 297.0L78.4 298.7L74.0 279.7L70.2 274.1L70.8 269.7L74.4 269.2L83.9 257.3L85.8 252.4L84.0 246.5L64.5 239.5ZM43.4 259.7L40.3 252.5L41.3 245.4L39.9 251.6L43.4 259.7Z",
			"cx": 60,
			"cy": 332.8
		},
		{
			"id": "anuradhapura",
			"name": "Anuradhapura",
			"province": "North Central",
			"population": 93e4,
			"path": "M84.0 246.5L85.8 252.4L83.9 257.3L70.1 273.1L78.4 298.7L84.9 297.0L92.1 299.5L99.7 306.9L124.4 318.4L131.7 318.1L142.4 328.5L149.9 330.1L150.8 346.7L158.1 348.1L161.4 360.0L159.5 364.8L164.8 370.7L176.1 365.0L178.0 361.6L182.1 363.8L186.1 361.5L191.5 353.4L192.3 345.6L196.4 346.2L200.5 340.0L209.2 336.4L212.8 327.1L209.6 326.6L209.7 312.3L217.5 290.0L233.9 289.5L243.4 261.9L249.8 255.7L242.2 250.0L241.7 242.2L233.0 230.0L236.4 219.7L230.5 204.4L236.2 192.4L229.1 184.5L213.8 177.9L193.8 186.4L181.4 186.7L180.8 190.5L186.8 192.4L191.0 200.6L168.3 223.5L156.4 217.7L151.8 220.9L144.3 230.0L144.1 236.6L139.2 238.6L136.8 243.2L128.3 240.7L125.8 231.9L119.4 228.7L119.1 219.8L98.1 225.2L86.1 221.0L87.1 247.4L84.0 246.5Z",
			"cx": 163.9,
			"cy": 273.5
		},
		{
			"id": "polonnaruwa",
			"name": "Polonnaruwa",
			"province": "North Central",
			"population": 44e4,
			"path": "M293.1 384.2L290.3 369.4L292.3 352.6L301.4 347.9L310.2 349.5L304.4 333.4L305.3 294.6L301.2 293.0L294.7 299.1L291.6 311.3L287.3 312.6L284.6 311.7L288.3 307.2L285.9 298.2L280.1 297.6L275.5 293.0L249.4 290.9L247.9 284.0L241.1 278.8L236.0 281.6L233.9 289.5L217.5 290.0L209.7 312.3L209.6 326.6L212.8 327.1L208.1 334.7L213.2 339.5L214.7 345.1L219.3 341.5L226.0 345.1L220.2 351.8L216.0 372.7L210.0 374.9L212.3 390.6L210.0 391.7L218.4 395.9L225.9 390.8L230.1 394.5L231.2 388.3L238.9 389.5L263.2 385.6L267.7 386.6L271.7 392.7L288.4 400.2L292.8 394.5L293.1 384.2Z",
			"cx": 254.7,
			"cy": 341.9
		},
		{
			"id": "badulla",
			"name": "Badulla",
			"province": "Uva",
			"population": 88e4,
			"path": "M247.5 404.1L246.1 441.1L254.2 472.5L246.7 479.0L241.4 478.8L244.7 485.8L242.5 489.0L245.3 492.1L242.9 495.5L245.3 499.6L239.1 506.6L237.4 514.8L227.5 517.0L221.4 526.2L212.6 528.4L218.5 530.4L223.3 540.3L219.2 543.2L222.7 547.7L218.2 549.6L218.7 555.9L221.4 554.8L226.8 558.4L226.3 562.2L218.8 565.0L221.9 570.9L226.7 573.0L236.7 566.5L241.0 567.3L243.3 573.4L247.3 575.2L247.7 580.1L251.2 580.5L250.6 587.4L255.3 593.2L257.2 586.0L262.2 586.8L262.1 583.2L266.3 581.4L261.9 574.1L262.6 565.6L266.1 560.7L260.3 558.8L262.7 545.8L267.5 546.6L268.1 543.3L275.1 541.4L270.8 535.5L281.3 530.5L283.0 525.7L286.6 526.9L287.1 523.7L290.5 522.7L293.7 511.7L291.0 498.5L288.2 496.3L280.5 498.5L272.8 484.5L277.7 479.2L279.8 482.9L283.4 483.1L292.2 471.4L291.4 466.5L298.2 464.9L298.3 462.4L293.9 454.7L289.4 455.1L284.9 447.3L286.1 444.0L282.9 435.7L287.1 423.1L285.7 414.7L279.7 413.7L264.6 423.8L258.6 425.0L254.0 416.7L253.7 409.2L247.5 404.1Z",
			"cx": 257.9,
			"cy": 511.7
		},
		{
			"id": "monaragala",
			"name": "Monaragala",
			"province": "Uva",
			"population": 49e4,
			"path": "M356.6 586.6L361.6 520.2L356.4 508.7L357.6 501.3L340.5 495.2L337.9 486.2L341.7 478.7L347.0 475.2L341.8 470.8L341.1 462.5L334.2 456.5L336.3 454.2L333.9 439.6L331.3 438.1L334.2 433.8L330.3 433.2L321.9 437.6L321.5 440.5L316.2 441.6L318.2 448.5L314.8 453.2L306.8 454.3L307.2 467.3L300.7 471.2L298.2 464.9L291.4 466.5L292.2 471.4L283.4 483.1L279.8 482.9L277.7 479.2L272.8 484.5L280.5 498.5L288.2 496.3L291.0 498.5L293.9 509.3L291.9 519.2L286.6 526.9L283.0 525.7L281.3 530.5L270.8 535.5L274.1 542.3L268.1 543.3L267.5 546.6L262.7 545.8L260.3 558.8L266.1 560.7L262.6 565.6L261.9 574.1L266.3 581.4L262.1 583.2L262.2 586.8L257.2 586.0L255.3 593.2L250.6 587.4L251.2 580.5L247.7 580.1L247.3 575.2L243.3 573.4L241.0 567.3L236.3 570.5L221.6 602.3L224.2 608.2L223.5 617.7L228.1 625.5L234.6 627.8L237.8 636.1L254.5 627.7L252.8 620.1L257.8 619.5L260.1 614.2L262.0 616.0L263.6 613.8L275.0 614.3L278.5 619.3L283.2 617.0L290.4 627.7L295.2 628.3L299.5 623.4L314.9 619.7L319.4 615.4L333.0 616.6L334.8 601.3L349.1 591.0L355.1 589.8L356.6 586.6Z",
			"cx": 290.6,
			"cy": 541.3
		},
		{
			"id": "kegalle",
			"name": "Kegalle",
			"province": "Sabaragamuwa",
			"population": 89e4,
			"path": "M115.0 527.6L117.1 525.3L118.7 530.2L121.7 530.4L127.7 538.5L132.1 537.3L137.3 542.9L140.2 539.5L147.6 537.7L156.5 542.4L164.2 542.6L166.8 539.9L163.4 531.9L153.3 528.3L155.4 519.3L153.3 514.5L159.2 510.2L159.9 501.8L155.4 493.8L165.0 490.9L173.2 483.6L167.2 476.9L168.1 471.2L161.3 467.2L161.6 463.5L152.1 455.2L149.6 446.3L146.2 444.0L138.4 445.5L139.9 450.2L136.9 457.1L134.0 455.8L122.4 460.0L112.2 468.1L110.2 478.9L103.5 480.3L106.5 491.1L115.2 490.2L106.5 503.0L109.4 517.1L116.1 518.0L115.0 527.6Z",
			"cx": 139.4,
			"cy": 499.4
		},
		{
			"id": "ratnapura",
			"name": "Ratnapura",
			"province": "Sabaragamuwa",
			"population": 117e4,
			"path": "M164.1 623.7L170.7 622.5L173.4 618.7L185.4 618.7L184.1 627.5L192.8 626.1L194.3 634.4L200.1 634.3L216.4 641.2L226.8 640.4L231.2 644.9L242.8 646.8L234.6 627.8L228.1 625.5L223.5 617.7L224.2 608.2L221.6 602.3L227.8 591.9L229.8 581.2L238.9 567.8L236.7 566.5L226.7 573.0L221.9 570.9L218.8 565.0L226.3 562.2L226.8 558.4L221.4 554.8L218.7 555.9L218.2 549.6L214.9 552.7L200.5 556.0L169.6 553.7L163.9 550.8L164.2 542.6L151.7 541.2L147.6 537.7L140.2 539.5L137.3 542.9L132.1 537.3L127.7 538.5L121.7 530.4L118.7 530.2L117.1 525.3L111.0 530.8L108.6 537.7L113.3 542.6L113.0 545.4L108.9 546.0L115.7 567.0L121.5 572.8L122.5 578.4L130.8 583.8L132.8 588.1L129.5 589.3L131.1 593.7L144.3 613.5L150.9 619.3L163.3 621.5L164.1 623.7Z",
			"cx": 176.2,
			"cy": 581.2
		}
	]
};
var DISTRICTS = SRI_LANKA_MAP.districts;
var DISTRICT_BY_NAME = new Map(DISTRICTS.map((d) => [d.name.toLowerCase(), d]));
var PROVINCES = [
	"Western",
	"Central",
	"Southern",
	"Northern",
	"Eastern",
	"North Western",
	"North Central",
	"Uva",
	"Sabaragamuwa"
];
Object.fromEntries(PROVINCES.map((p) => [p, DISTRICTS.filter((d) => d.province === p).map((d) => d.name)]));
var PROVINCE_ALIASES = {
	western: "Western",
	west: "Western",
	wp: "Western",
	central: "Central",
	cp: "Central",
	southern: "Southern",
	south: "Southern",
	sp: "Southern",
	northern: "Northern",
	north: "Northern",
	np: "Northern",
	eastern: "Eastern",
	east: "Eastern",
	ep: "Eastern",
	"north western": "North Western",
	northwestern: "North Western",
	"north-western": "North Western",
	nwp: "North Western",
	wayamba: "North Western",
	"north central": "North Central",
	northcentral: "North Central",
	"north-central": "North Central",
	ncp: "North Central",
	uva: "Uva",
	up: "Uva",
	sabaragamuwa: "Sabaragamuwa",
	sabaragamuwaa: "Sabaragamuwa",
	sgp: "Sabaragamuwa"
};
function fold(value) {
	return value.toLowerCase().replace(/province|district|pradeshiya|divisional/g, "").replace(/[^a-z]/g, " ").replace(/\s+/g, " ").trim();
}
function matchProvince$1(value) {
	if (!value) return null;
	const key = fold(value);
	if (!key) return null;
	if (PROVINCE_ALIASES[key]) return PROVINCE_ALIASES[key];
	return PROVINCES.find((p) => p.toLowerCase() === key) ?? null;
}
function matchDistrict(value) {
	if (!value) return null;
	const key = fold(value);
	if (!key) return null;
	const exact = DISTRICT_BY_NAME.get(key);
	if (exact) return exact;
	for (const d of DISTRICTS) {
		if (fold(d.name) === key) return d;
		if (key.includes(fold(d.name)) || fold(d.name).includes(key)) return d;
	}
	return null;
}
var LKR = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 0 });
var LKR_1 = new Intl.NumberFormat("en-LK", { maximumFractionDigits: 1 });
var PCT = new Intl.NumberFormat("en-LK", {
	maximumFractionDigits: 1,
	signDisplay: "exceptZero"
});
var NUM = new Intl.NumberFormat("en-LK");
function formatLkr(value, compact = false) {
	const abs = Math.abs(value);
	if (compact || abs >= 1e6) {
		if (abs >= 1e9) return `Rs. ${LKR_1.format(value / 1e9)}B`;
		if (abs >= 1e6) return `Rs. ${LKR_1.format(value / 1e6)}M`;
		if (abs >= 1e4) return `Rs. ${LKR.format(value / 1e3)}k`;
	}
	return `Rs. ${LKR.format(Math.round(value))}`;
}
function formatNumber(value) {
	return NUM.format(Math.round(value));
}
function formatPct(value, digits = 1) {
	if (value === null || Number.isNaN(value) || !Number.isFinite(value)) return "—";
	return `${PCT.format(value * 100)}%`;
}
function deltaTone(value) {
	if (value === null || Math.abs(value) < .005) return "muted";
	return value > 0 ? "up" : "down";
}
function formatPeriodLabel(year, maxDate) {
	if (year === "all") return "All years";
	if (year === 2026 && maxDate && maxDate.getUTCFullYear() === 2026) {
		if (maxDate.getUTCMonth() < 11) return "2026 YTD";
	}
	return String(year);
}
var MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function monthLabel(year, month) {
	return `${MONTHS[month]} ${String(year).slice(2)}`;
}
function applyFilters(rows, filters) {
	return rows.filter((row) => {
		if (filters.year !== "all" && row.date.getUTCFullYear() !== filters.year) return false;
		if (filters.province !== "All" && row.province !== filters.province) return false;
		if (filters.district !== "All" && row.district !== filters.district) return false;
		if (filters.category !== "All" && row.category !== filters.category) return false;
		return true;
	});
}
function previousFilters(filters) {
	if (filters.year === "all") return null;
	return {
		...filters,
		year: filters.year - 1
	};
}
function sumRevenue(rows) {
	let t = 0;
	for (const r of rows) t += r.revenue;
	return t;
}
function uniqueCustomers(rows) {
	const s = /* @__PURE__ */ new Set();
	for (const r of rows) if (r.customerId) s.add(r.customerId);
	return s.size;
}
function uniqueOrders(rows) {
	const s = /* @__PURE__ */ new Set();
	for (const r of rows) s.add(r.orderId || `${r.date.toISOString()}-${r.customerId}-${r.product}`);
	return s.size || rows.length;
}
function delta(curr, prev) {
	if (!prev) return null;
	return (curr - prev) / prev;
}
function groupRevenue(rows, key) {
	const map = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const k = key(row) || "Unspecified";
		let g = map.get(k);
		if (!g) {
			g = {
				revenue: 0,
				orders: /* @__PURE__ */ new Set()
			};
			map.set(k, g);
		}
		g.revenue += row.revenue;
		g.orders.add(row.orderId);
	}
	return map;
}
function namedShares(current, previous, key) {
	const curr = groupRevenue(current, key);
	const prev = groupRevenue(previous, key);
	const total = sumRevenue(current) || 1;
	const out = [];
	for (const [name, g] of curr) {
		const p = prev.get(name);
		out.push({
			name,
			revenue: g.revenue,
			share: g.revenue / total,
			orders: g.orders.size,
			growth: p ? delta(g.revenue, p.revenue) : null
		});
	}
	out.sort((a, b) => b.revenue - a.revenue);
	return out;
}
function monthly(rows) {
	const map = /* @__PURE__ */ new Map();
	for (const row of rows) {
		const year = row.date.getUTCFullYear();
		const month = row.date.getUTCMonth();
		const key = `${year}-${String(month + 1).padStart(2, "0")}`;
		let p = map.get(key);
		if (!p) {
			p = {
				key,
				label: monthLabel(year, month),
				year,
				month,
				revenue: 0,
				orders: 0
			};
			map.set(key, p);
		}
		p.revenue += row.revenue;
		p.orders += 1;
	}
	return [...map.values()].sort((a, b) => a.key.localeCompare(b.key));
}
function lastNMonths(rows, n, offset = 0) {
	if (!rows.length) return [];
	const max = rows.reduce((m, r) => r.date > m ? r.date : m, rows[0].date);
	const end = new Date(Date.UTC(max.getUTCFullYear(), max.getUTCMonth() + 1 - offset, 1));
	const start = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth() - n, 1));
	return rows.filter((r) => r.date >= start && r.date < end);
}
function repeatStats(rows) {
	const byCustomer = /* @__PURE__ */ new Map();
	for (const row of rows) {
		let g = byCustomer.get(row.customerId);
		if (!g) {
			g = {
				orders: /* @__PURE__ */ new Set(),
				revenue: 0
			};
			byCustomer.set(row.customerId, g);
		}
		g.orders.add(row.orderId);
		g.revenue += row.revenue;
	}
	let repeatRev = 0;
	let repeatOrders = 0;
	let oneRev = 0;
	let oneOrders = 0;
	for (const g of byCustomer.values()) if (g.orders.size > 1) {
		repeatRev += g.revenue;
		repeatOrders += g.orders.size;
	} else {
		oneRev += g.revenue;
		oneOrders += g.orders.size;
	}
	const repeatAov = repeatOrders ? repeatRev / repeatOrders : 0;
	const oneTimeAov = oneOrders ? oneRev / oneOrders : 0;
	return {
		repeatAov,
		oneTimeAov,
		multiple: oneTimeAov ? repeatAov / oneTimeAov : null
	};
}
function uniqueSorted(values) {
	return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}
function computeAnalytics(allRows, filters) {
	const current = applyFilters(allRows, filters);
	const prevFilters = previousFilters(filters);
	const previous = prevFilters ? applyFilters(allRows, prevFilters) : lastNMonths(applyFilters(allRows, {
		...filters,
		year: "all"
	}), 12, 12);
	const revenue = sumRevenue(current);
	const prevRevenue = sumRevenue(previous);
	const orders = uniqueOrders(current);
	const prevOrders = uniqueOrders(previous);
	const customers = uniqueCustomers(current);
	const prevCustomers = uniqueCustomers(previous);
	const aov = orders ? revenue / orders : 0;
	const prevAov = prevOrders ? prevRevenue / prevOrders : 0;
	const trend = monthly(filters.year === "all" ? applyFilters(allRows, {
		...filters,
		year: "all"
	}) : current.concat(previous));
	const byProvince = namedShares(current, previous, (r) => r.province);
	const byCategory = namedShares(current, previous, (r) => r.category);
	const byProduct = namedShares(current, previous, (r) => r.product);
	const geoCurrent = applyFilters(allRows, {
		...filters,
		district: "All"
	});
	const geoPrevious = prevFilters ? applyFilters(allRows, {
		...prevFilters,
		district: "All"
	}) : lastNMonths(applyFilters(allRows, {
		...filters,
		year: "all",
		district: "All"
	}), 12, 12);
	const districtCurr = groupRevenue(geoCurrent, (r) => r.district);
	const districtPrev = groupRevenue(geoPrevious, (r) => r.district);
	const districtCustomers = /* @__PURE__ */ new Map();
	for (const row of geoCurrent) {
		let s = districtCustomers.get(row.district);
		if (!s) {
			s = /* @__PURE__ */ new Set();
			districtCustomers.set(row.district, s);
		}
		s.add(row.customerId);
	}
	const byDistrict = DISTRICTS.map((d) => {
		const g = districtCurr.get(d.name);
		const p = districtPrev.get(d.name);
		const cust = districtCustomers.get(d.name)?.size ?? 0;
		return {
			district: d.name,
			province: d.province,
			revenue: g?.revenue ?? 0,
			orders: g?.orders.size ?? 0,
			customers: cust,
			growth: p && p.revenue ? delta(g?.revenue ?? 0, p.revenue) : null,
			penetration: d.population ? cust / d.population : 0,
			population: d.population
		};
	});
	const scoped = filters.year === "all" ? current : current;
	const last3Rows = lastNMonths(scoped, 3, 0);
	const prior3Rows = lastNMonths(scoped, 3, 3);
	const last3 = last3Rows.length ? {
		revenue: sumRevenue(last3Rows),
		orders: last3Rows.length
	} : null;
	const prior3 = prior3Rows.length ? {
		revenue: sumRevenue(prior3Rows),
		orders: prior3Rows.length
	} : null;
	const dates = allRows.length ? {
		min: allRows.reduce((m, r) => r.date < m ? r.date : m, allRows[0].date),
		max: allRows.reduce((m, r) => r.date > m ? r.date : m, allRows[0].date)
	} : {
		min: null,
		max: null
	};
	const years = uniqueSorted(allRows.map((r) => String(r.date.getUTCFullYear()))).map(Number);
	const rs = repeatStats(current);
	return {
		current,
		previous,
		kpis: {
			revenue,
			orders,
			customers,
			aov,
			revenueDelta: delta(revenue, prevRevenue),
			ordersDelta: delta(orders, prevOrders),
			customersDelta: delta(customers, prevCustomers),
			aovDelta: delta(aov, prevAov)
		},
		trend,
		byProvince,
		byCategory,
		byProduct,
		byDistrict,
		last3,
		prior3,
		last3Delta: last3 && prior3 ? delta(last3.revenue, prior3.revenue) : null,
		repeatAov: rs.repeatAov,
		oneTimeAov: rs.oneTimeAov,
		repeatMultiple: rs.multiple,
		dateMin: dates.min,
		dateMax: dates.max,
		years,
		provinces: uniqueSorted(allRows.map((r) => r.province)),
		categories: uniqueSorted(allRows.map((r) => r.category)),
		districts: uniqueSorted(allRows.map((r) => r.district)),
		hasGeo: allRows.some((r) => r.district && r.district !== "Unspecified")
	};
}
function normalizeRowLocation(province, district) {
	const d = matchDistrict(district);
	if (d) return {
		province: d.province,
		district: d.name
	};
	return {
		province: matchProvince$1(province) ?? (province || "Unspecified"),
		district: district || "Unspecified"
	};
}
function scoreGrowth(g) {
	if (g === null) return 0;
	return Math.abs(g);
}
function buildInsights(a, filters) {
	const out = [];
	const { kpis, byCategory, byProduct, byProvince, byDistrict } = a;
	const fastestCat = [...byCategory].sort((x, y) => (y.growth ?? -999) - (x.growth ?? -999))[0];
	if (fastestCat && fastestCat.growth !== null && fastestCat.growth > .04) out.push({
		id: "growth-cat",
		kind: "growth",
		title: "Growth",
		metric: formatPct(fastestCat.growth),
		body: `${fastestCat.name} grew ${formatPct(fastestCat.growth)} versus the previous period, with ${formatLkr(fastestCat.revenue, true)} in the current view.`
	});
	const fastestRegion = [...byProvince].sort((x, y) => (y.growth ?? -999) - (x.growth ?? -999))[0];
	const topRegion = byProvince[0];
	if (fastestRegion && fastestRegion.growth !== null && fastestRegion.share < .12 && fastestRegion.growth > .08) out.push({
		id: "opp-region",
		kind: "opportunity",
		title: "Opportunity",
		metric: formatPct(fastestRegion.growth),
		body: `${fastestRegion.name} is the fastest-growing region (${formatPct(fastestRegion.growth)}) but still only ${Math.round(fastestRegion.share * 100)}% of revenue. Worth a distribution push.`
	});
	const risingProduct = [...byProduct].filter((p) => (p.growth ?? 0) > .12 && p.share < .1).sort((x, y) => (y.growth ?? 0) - (x.growth ?? 0))[0];
	if (risingProduct && risingProduct.growth !== null) out.push({
		id: "opp-product",
		kind: "opportunity",
		title: "Product opportunity",
		metric: formatPct(risingProduct.growth),
		body: `${risingProduct.name} grew ${formatPct(risingProduct.growth)} while representing only ${Math.round(risingProduct.share * 100)}% of sales. High growth, low share.`
	});
	const topN = byProduct.slice(0, 5);
	const topNShare = topN.reduce((s, p) => s + p.share, 0);
	if (topN.length >= 3 && topNShare >= .4) out.push({
		id: "concentration",
		kind: "concentration",
		title: "Concentration",
		metric: `${Math.round(topNShare * 100)}%`,
		body: `The top ${topN.length} products contribute ${Math.round(topNShare * 100)}% of revenue. A miss on ${topN[0]?.name ?? "the leader"} would move the P&L.`
	});
	if (topRegion && a.last3Delta !== null && topRegion.share >= .28 && a.last3Delta < -.03) out.push({
		id: "risk-region",
		kind: "risk",
		title: "Risk",
		metric: formatPct(a.last3Delta),
		body: `${topRegion.name} contributes ${Math.round(topRegion.share * 100)}% of revenue, but the last three months are ${formatPct(a.last3Delta)} versus the prior three.`
	});
	else if (topRegion && topRegion.growth !== null && topRegion.growth < -.03 && topRegion.share >= .25) out.push({
		id: "risk-region-yoy",
		kind: "risk",
		title: "Risk",
		metric: formatPct(topRegion.growth),
		body: `${topRegion.name} is ${Math.round(topRegion.share * 100)}% of revenue and is ${formatPct(topRegion.growth)} versus the previous period.`
	});
	if (a.repeatMultiple !== null && a.repeatMultiple >= 1.3 && a.repeatAov > 0) out.push({
		id: "customer",
		kind: "customer",
		title: "Customer signal",
		metric: `${a.repeatMultiple.toFixed(1)}×`,
		body: `Repeat customers generate ${a.repeatMultiple.toFixed(1)}× higher average order value (${formatLkr(a.repeatAov)}) than one-time buyers (${formatLkr(a.oneTimeAov)}).`
	});
	if (topRegion && fastestRegion && topRegion.name !== fastestRegion.name && fastestRegion.growth !== null) out.push({
		id: "market",
		kind: "market",
		title: "Market signal",
		metric: `${Math.round(topRegion.share * 100)}%`,
		body: `${topRegion.name} still leads with ${Math.round(topRegion.share * 100)}% of revenue${topRegion.growth !== null ? ` (${formatPct(topRegion.growth)} YoY)` : ""}, while ${fastestRegion.name} is compounding faster at ${formatPct(fastestRegion.growth)}.`
	});
	const weakDistrict = [...byDistrict].filter((d) => d.revenue > 0 && d.growth !== null).sort((x, y) => (x.growth ?? 0) - (y.growth ?? 0))[0];
	if (weakDistrict && (weakDistrict.growth ?? 0) < -.08 && filters.district === "All") out.push({
		id: "district-soft",
		kind: "risk",
		title: "Soft patch",
		metric: formatPct(weakDistrict.growth),
		body: `${weakDistrict.district} is the weakest district in this view at ${formatPct(weakDistrict.growth)} versus the previous period (${formatLkr(weakDistrict.revenue, true)}).`
	});
	const dense = [...byDistrict].sort((a, b) => b.penetration - a.penetration)[0];
	const sparse = [...byDistrict].filter((d) => d.population > 4e5).sort((a, b) => a.penetration - b.penetration)[0];
	if (dense && sparse && dense.district !== sparse.district && dense.penetration > 0) out.push({
		id: "penetration",
		kind: "opportunity",
		title: "Coverage gap",
		body: `Customer density is highest in ${dense.district}, while ${sparse.district} is thin relative to its population. Same offer, under-served market.`
	});
	if (kpis.revenueDelta !== null && Math.abs(kpis.revenueDelta) >= .03) out.push({
		id: "headline",
		kind: kpis.revenueDelta >= 0 ? "growth" : "risk",
		title: kpis.revenueDelta >= 0 ? "Top line" : "Top-line pressure",
		metric: formatPct(kpis.revenueDelta),
		body: `Revenue is ${formatPct(kpis.revenueDelta)} versus the previous period, at ${formatLkr(kpis.revenue, true)} across ${kpis.orders.toLocaleString("en-LK")} orders.`
	});
	const ranked = out.map((ins, i) => ({
		ins,
		w: weight(ins) - i * .01
	})).sort((a, b) => b.w - a.w).map((x) => x.ins);
	const seen = /* @__PURE__ */ new Set();
	const unique = [];
	for (const ins of ranked) {
		if (seen.has(ins.kind) && unique.length >= 3) continue;
		seen.add(ins.kind);
		unique.push(ins);
		if (unique.length >= 5) break;
	}
	if (unique.length === 0) unique.push({
		id: "empty",
		kind: "market",
		title: "Thin slice",
		body: "Not enough movement in this filter to call a signal. Widen the year, region, or category and generate again."
	});
	return unique;
}
function weight(ins) {
	return ({
		risk: 5,
		opportunity: 4.5,
		concentration: 4,
		growth: 3.5,
		customer: 3.2,
		market: 3
	}[ins.kind] ?? 1) + scoreGrowth(0);
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a = a + 1831565813 >>> 0;
		let t = a;
		t = Math.imul(t ^ t >>> 15, t | 1);
		t ^= t + Math.imul(t ^ t >>> 7, t | 61);
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function pickWeighted(rng, items, weight) {
	let total = 0;
	for (const item of items) total += weight(item);
	let r = rng() * total;
	for (const item of items) {
		r -= weight(item);
		if (r <= 0) return item;
	}
	return items[items.length - 1];
}
var PRODUCTS = [
	{
		name: "Helios Smartphone",
		category: "Electronics",
		price: 89900,
		w: 3.2,
		g: -.03
	},
	{
		name: "Nimbus Tablet",
		category: "Electronics",
		price: 45900,
		w: 2.1,
		g: .06
	},
	{
		name: "Aurora Headphones",
		category: "Electronics",
		price: 12400,
		w: 4.4,
		g: .32
	},
	{
		name: "Volt Power Bank",
		category: "Electronics",
		price: 3900,
		w: 5.5,
		g: .14
	},
	{
		name: "Ceylon Sound Bar",
		category: "Electronics",
		price: 21900,
		w: 1.6,
		g: .09
	},
	{
		name: "Monsoon Cookware",
		category: "Home",
		price: 7800,
		w: 6.8,
		g: .18
	},
	{
		name: "Lotus Bedding",
		category: "Home",
		price: 6400,
		w: 5.1,
		g: .11
	},
	{
		name: "Harbour Lamp",
		category: "Home",
		price: 4200,
		w: 3.4,
		g: .26
	},
	{
		name: "Tropic Mixer",
		category: "Home",
		price: 9800,
		w: 2.4,
		g: .08
	},
	{
		name: "Tea Trail Apparel",
		category: "Lifestyle",
		price: 3200,
		w: 7.2,
		g: .15
	},
	{
		name: "Pearl Jewellery Mini",
		category: "Lifestyle",
		price: 18600,
		w: 1.8,
		g: .21
	},
	{
		name: "Island Tote",
		category: "Lifestyle",
		price: 2100,
		w: 6,
		g: .07
	},
	{
		name: "Rainforest Skincare",
		category: "Lifestyle",
		price: 2800,
		w: 5.4,
		g: .24
	},
	{
		name: "Kandy Spice Box",
		category: "Grocery",
		price: 1450,
		w: 11,
		g: .05
	},
	{
		name: "Ceylon Tea Chest",
		category: "Grocery",
		price: 2650,
		w: 13,
		g: .04
	},
	{
		name: "Coconut Pantry",
		category: "Grocery",
		price: 980,
		w: 10,
		g: .03
	},
	{
		name: "Coral Dental",
		category: "Personal Care",
		price: 690,
		w: 8.5,
		g: .06
	},
	{
		name: "Bay Rum Set",
		category: "Personal Care",
		price: 1750,
		w: 4.2,
		g: .14
	}
];
var DISTRICT_WEIGHT = {
	Colombo: 22,
	Gampaha: 12.5,
	Kalutara: 6.2,
	Kandy: 8.4,
	Matale: 2.1,
	"Nuwara Eliya": 3.2,
	Galle: 5.4,
	Matara: 3.3,
	Hambantota: 2.4,
	Jaffna: 2.6,
	Kilinochchi: .55,
	Mannar: .5,
	Mullaitivu: .42,
	Vavuniya: .8,
	Trincomalee: 1.9,
	Batticaloa: 2.3,
	Ampara: 2.1,
	Kurunegala: 6.1,
	Puttalam: 3,
	Anuradhapura: 3.1,
	Polonnaruwa: 1.6,
	Badulla: 2.6,
	Monaragala: 1.3,
	Ratnapura: 3.6,
	Kegalle: 2.6
};
var MONTH_SEASON = [
	.92,
	.88,
	.96,
	1.18,
	.95,
	.98,
	1.02,
	1.06,
	1,
	1.04,
	1.08,
	1.22
];
function districtWeight(name, year, month) {
	let w = DISTRICT_WEIGHT[name] ?? 1;
	const province = DISTRICTS.find((d) => d.name === name)?.province;
	if (province === "Southern") w *= 1 + Math.max(0, year - 2024) * .16;
	if (province === "Northern") w *= 1 + Math.max(0, year - 2024) * .1;
	if (province === "Western") {
		w *= 1.08;
		if (year === 2026 && month >= 5) w *= month >= 8 ? .78 : .88;
	}
	if (province === "Eastern") w *= 1 + (year - 2024) * .07;
	return w;
}
function productWeight(p, year) {
	const t = year - 2024;
	return Math.max(.35, p.w * (1 + p.g * t));
}
function generateSampleSales(seed = 202609) {
	const rng = mulberry32(seed);
	const rows = [];
	let orderSeq = 1e4;
	const customerPool = Array.from({ length: 3600 }, (_, i) => ({
		id: `C-${String(1e3 + i).padStart(4, "0")}`,
		repeat: rng() < .38,
		aovLift: rng() < .38 ? 1.6 + rng() * 1.4 : .75 + rng() * .35,
		district: pickWeighted(rng, DISTRICTS, (d) => DISTRICT_WEIGHT[d.name] ?? 1)
	})).flatMap((c) => c.repeat ? [
		c,
		c,
		c
	] : [c]);
	const months = [];
	for (const year of [
		2024,
		2025,
		2026
	]) {
		const lastMonth = year === 2026 ? 8 : 11;
		const yearBase = year === 2024 ? 560 : year === 2025 ? 640 : 900;
		for (let month = 0; month <= lastMonth; month++) {
			const n = Math.round(yearBase * MONTH_SEASON[month] * (.94 + rng() * .12));
			months.push({
				year,
				month,
				n
			});
		}
	}
	for (const { year, month, n } of months) {
		const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
		for (let i = 0; i < n; i++) {
			const day = 1 + Math.floor(rng() * daysInMonth);
			const customer = customerPool[Math.floor(rng() * customerPool.length)];
			const district = rng() < .72 ? customer.district : pickWeighted(rng, DISTRICTS, (d) => districtWeight(d.name, year, month));
			const product = pickWeighted(rng, [...PRODUCTS], (p) => productWeight(p, year));
			const qty = 1 + (rng() < .18 ? 1 : 0) + (rng() < .04 ? 1 : 0);
			const noise = .92 + rng() * .16;
			const revenue = Math.round(product.price * qty * customer.aovLift * noise);
			orderSeq += 1;
			rows.push({
				date: new Date(Date.UTC(year, month, day)),
				orderId: `SO-${orderSeq}`,
				customerId: customer.id,
				product: product.name,
				category: product.category,
				province: district.province,
				district: district.name,
				quantity: qty,
				revenue
			});
		}
	}
	return rows;
}
var DEMO_SALES = generateSampleSales();
var TEMPLATE_CSV = `date,order_id,customer_id,product,category,province,district,quantity,revenue
2026-03-12,SO-10001,C-1042,Ceylon Tea Chest,Grocery,Western,Colombo,2,5300
2026-03-12,SO-10002,C-1188,Aurora Headphones,Electronics,Southern,Galle,1,12400
2026-03-13,SO-10003,C-1042,Monsoon Cookware,Home,Western,Colombo,1,7800
2026-03-14,SO-10004,C-2210,Tea Trail Apparel,Lifestyle,Central,Kandy,3,9600
2026-03-15,SO-10005,C-3001,Harbour Lamp,Home,Northern,Jaffna,1,4200
`;
var DEFAULT_FILTERS = {
	year: 2026,
	province: "All",
	district: "All",
	category: "All"
};
var MarketContext = (0, import_react.createContext)(null);
function MarketProvider({ children }) {
	const [rows, setRows] = (0, import_react.useState)(DEMO_SALES);
	const [source, setSource] = (0, import_react.useState)("demo");
	const [fileName, setFileName] = (0, import_react.useState)("Sri Lanka retail demo");
	const [filters, setFilters] = (0, import_react.useState)(DEFAULT_FILTERS);
	const [mapMode, setMapMode] = (0, import_react.useState)("revenue");
	const [insightTick, setInsightTick] = (0, import_react.useState)(0);
	const analytics = (0, import_react.useMemo)(() => computeAnalytics(rows, filters), [rows, filters]);
	const insights = (0, import_react.useMemo)(() => {
		return buildInsights(analytics, filters);
	}, [
		analytics,
		filters,
		insightTick
	]);
	const setFilter = (0, import_react.useCallback)((key, value) => {
		setFilters((prev) => {
			const next = {
				...prev,
				[key]: value
			};
			if (key === "province") next.district = "All";
			return next;
		});
	}, []);
	const resetFilters = (0, import_react.useCallback)(() => setFilters(DEFAULT_FILTERS), []);
	const selectDistrict = (0, import_react.useCallback)((district) => {
		setFilters((prev) => {
			if (prev.district === district) return {
				...prev,
				district: "All"
			};
			const match = analytics.byDistrict.find((d) => d.district === district);
			return {
				...prev,
				district,
				province: match?.province ?? prev.province
			};
		});
	}, [analytics.byDistrict]);
	const loadDemo = (0, import_react.useCallback)(() => {
		setRows(DEMO_SALES);
		setSource("demo");
		setFileName("Sri Lanka retail demo");
		setFilters(DEFAULT_FILTERS);
	}, []);
	const loadUpload = (0, import_react.useCallback)((nextRows, name) => {
		setRows(nextRows);
		setSource("upload");
		setFileName(name);
		const years = [...new Set(nextRows.map((r) => r.date.getUTCFullYear()))].sort();
		const latest = years[years.length - 1];
		setFilters({
			year: latest ?? "all",
			province: "All",
			district: "All",
			category: "All"
		});
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		rows,
		source,
		fileName,
		filters,
		mapMode,
		analytics,
		insights,
		setFilter,
		setFilters,
		resetFilters,
		setMapMode,
		selectDistrict,
		loadDemo,
		loadUpload,
		regenerateInsights: () => setInsightTick((n) => n + 1)
	}), [
		rows,
		source,
		fileName,
		filters,
		mapMode,
		analytics,
		insights,
		setFilter,
		resetFilters,
		selectDistrict,
		loadDemo,
		loadUpload
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketContext.Provider, {
		value,
		children
	});
}
function useMarket() {
	const ctx = (0, import_react.useContext)(MarketContext);
	if (!ctx) throw new Error("useMarket must be used within MarketProvider");
	return ctx;
}
var ALIASES = {
	date: [
		"date",
		"order_date",
		"orderdate",
		"invoice_date",
		"invoicedate",
		"txn_date",
		"transaction_date",
		"month",
		"period"
	],
	revenue: [
		"revenue",
		"amount",
		"sales",
		"total",
		"value",
		"net_sales",
		"netsales",
		"line_total",
		"linetotal",
		"turnover"
	],
	product: [
		"product",
		"product_name",
		"productname",
		"sku",
		"item",
		"item_name",
		"itemname"
	],
	category: [
		"category",
		"product_category",
		"segment",
		"department",
		"vertical"
	],
	province: [
		"province",
		"region",
		"area",
		"zone",
		"state"
	],
	district: [
		"district",
		"city",
		"location",
		"town",
		"branch"
	],
	customerId: [
		"customer_id",
		"customerid",
		"customer",
		"client_id",
		"client",
		"buyer"
	],
	orderId: [
		"order_id",
		"orderid",
		"invoice_id",
		"invoice",
		"order",
		"bill_no",
		"bill"
	],
	quantity: [
		"quantity",
		"qty",
		"units",
		"unit",
		"count"
	]
};
var FIELD_LABELS = {
	date: "Date",
	revenue: "Revenue / amount",
	product: "Product",
	category: "Category",
	province: "Region / province",
	district: "District / city",
	customerId: "Customer ID",
	orderId: "Order ID",
	quantity: "Quantity"
};
var REQUIRED_FIELDS = ["date", "revenue"];
function normHeader(h) {
	return h.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
}
function autoMapColumns(headers) {
	const mapping = {};
	const unused = new Set(headers);
	Object.keys(ALIASES).forEach((field) => {
		for (const header of unused) {
			const n = normHeader(header);
			if (ALIASES[field].includes(n)) {
				mapping[field] = header;
				unused.delete(header);
				return;
			}
		}
	});
	return mapping;
}
function parseNumber(value) {
	if (typeof value === "number" && Number.isFinite(value)) return value;
	if (typeof value !== "string") return null;
	const cleaned = value.replace(/rs\.?|lkr|₹|,|\s/gi, "").trim();
	if (!cleaned) return null;
	const n = Number(cleaned);
	return Number.isFinite(n) ? n : null;
}
function excelSerialToDate(n) {
	if (n < 2e4 || n > 8e4) return null;
	const utc = Date.UTC(1899, 11, 30) + Math.round(n) * 864e5;
	const d = new Date(utc);
	return Number.isNaN(+d) ? null : d;
}
function parseDate(value) {
	if (value instanceof Date && !Number.isNaN(+value)) return new Date(Date.UTC(value.getFullYear(), value.getMonth(), value.getDate()));
	if (typeof value === "number") return excelSerialToDate(value);
	if (typeof value !== "string") return null;
	const s = value.trim();
	if (!s) return null;
	const iso = /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})/.exec(s);
	if (iso) return new Date(Date.UTC(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])));
	const dmy = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})/.exec(s);
	if (dmy) {
		const a = Number(dmy[1]);
		const b = Number(dmy[2]);
		const y = Number(dmy[3]);
		const dayFirst = a > 12 || b <= 12;
		const day = dayFirst ? a : b;
		const month = dayFirst ? b : a;
		if (month >= 1 && month <= 12 && day >= 1 && day <= 31) return new Date(Date.UTC(y, month - 1, day));
	}
	const t = Date.parse(s);
	if (!Number.isNaN(t)) {
		const d = new Date(t);
		return new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	}
	return null;
}
async function readSpreadsheet(file) {
	const name = file.name.toLowerCase();
	if (name.endsWith(".csv") || name.endsWith(".txt") || file.type.includes("csv")) return parseCsv(await file.text());
	const XLSX = await import("../_libs/xlsx.mjs").then((n) => n.t);
	const buf = await file.arrayBuffer();
	const wb = XLSX.read(buf, {
		type: "array",
		cellDates: true
	});
	const sheetName = wb.SheetNames[0];
	if (!sheetName) return {
		headers: [],
		records: []
	};
	const sheet = wb.Sheets[sheetName];
	if (!sheet) return {
		headers: [],
		records: []
	};
	const records = XLSX.utils.sheet_to_json(sheet, {
		defval: "",
		raw: true
	});
	return {
		headers: records.length ? Object.keys(records[0]) : [],
		records
	};
}
function parseCsv(text) {
	const result = import_papaparse.default.parse(text, {
		header: true,
		skipEmptyLines: "greedy",
		dynamicTyping: false
	});
	return {
		headers: result.meta.fields?.filter(Boolean) ?? [],
		records: result.data
	};
}
function cell(record, header) {
	if (!header) return void 0;
	return record[header];
}
function rowsFromMapping(records, mapping) {
	const warnings = [];
	const rows = [];
	let skipped = 0;
	let unmatchedGeo = 0;
	records.forEach((record, i) => {
		const date = parseDate(cell(record, mapping.date));
		const revenue = parseNumber(cell(record, mapping.revenue));
		if (!date || revenue === null) {
			skipped += 1;
			return;
		}
		const product = String(cell(record, mapping.product) ?? "").trim() || "Unspecified";
		const category = String(cell(record, mapping.category) ?? "").trim() || "Uncategorised";
		const rawProvince = String(cell(record, mapping.province) ?? "").trim();
		const rawDistrict = String(cell(record, mapping.district) ?? "").trim();
		const loc = normalizeRowLocation(rawProvince, rawDistrict);
		if ((rawProvince || rawDistrict) && loc.district === "Unspecified" && loc.province === "Unspecified") unmatchedGeo += 1;
		else if (rawDistrict && !matchDistrict(rawDistrict) && !matchProvince(rawProvince)) unmatchedGeo += 1;
		const qty = parseNumber(cell(record, mapping.quantity)) ?? 1;
		rows.push({
			date,
			orderId: String(cell(record, mapping.orderId) ?? `ROW-${i + 1}`),
			customerId: String(cell(record, mapping.customerId) ?? `CUST-${i + 1}`),
			product,
			category,
			province: loc.province,
			district: loc.district,
			quantity: qty || 1,
			revenue
		});
	});
	if (!mapping.date || !mapping.revenue) warnings.push({
		level: "error",
		message: "Date and revenue columns are required."
	});
	if (skipped) warnings.push({
		level: "warn",
		message: `Skipped ${skipped} row${skipped === 1 ? "" : "s"} with missing date or revenue.`
	});
	if (!rows.length) warnings.push({
		level: "error",
		message: "No usable rows. Check that date and revenue columns are mapped and populated."
	});
	if (unmatchedGeo && unmatchedGeo > rows.length * .4) warnings.push({
		level: "warn",
		message: "Many locations did not match Sri Lankan districts. Charts still work; the map lights up when names match (e.g. Colombo, Kandy, Galle)."
	});
	if (!mapping.product) warnings.push({
		level: "warn",
		message: "No product column — product performance will group as Unspecified."
	});
	return {
		rows,
		warnings
	};
}
var OPTIONAL = [
	"product",
	"category",
	"province",
	"district",
	"customerId",
	"orderId",
	"quantity"
];
function UploadDialog() {
	const { loadUpload } = useMarket();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [parsed, setParsed] = (0, import_react.useState)(null);
	const [mapping, setMapping] = (0, import_react.useState)({});
	const [fileName, setFileName] = (0, import_react.useState)("");
	const [warnings, setWarnings] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const inputRef = (0, import_react.useRef)(null);
	function reset() {
		setParsed(null);
		setMapping({});
		setFileName("");
		setWarnings([]);
		setError(null);
		setBusy(false);
	}
	async function handleFile(file) {
		setBusy(true);
		setError(null);
		try {
			const table = await readSpreadsheet(file);
			if (!table.headers.length) {
				setError("Could not read any columns. Export as CSV or .xlsx with a header row.");
				setBusy(false);
				return;
			}
			setParsed(table);
			setFileName(file.name);
			setMapping(autoMapColumns(table.headers));
		} catch {
			setError("Could not parse that file. Try CSV or Excel (.xlsx).");
		} finally {
			setBusy(false);
		}
	}
	function apply() {
		if (!parsed) return;
		const result = rowsFromMapping(parsed.records, mapping);
		setWarnings(result.warnings);
		if (!result.rows.length) return;
		loadUpload(result.rows, fileName);
		setOpen(false);
		reset();
	}
	function downloadTemplate() {
		const blob = new Blob([TEMPLATE_CSV], { type: "text/csv;charset=utf-8" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "market-pulse-template.csv";
		a.click();
		URL.revokeObjectURL(url);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: (v) => {
			setOpen(v);
			if (!v) reset();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "secondary",
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {}), "Upload file"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90dvh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Load your sales file" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "CSV or Excel. Map date and revenue at minimum — product, region, and customer make the rest of the dashboard useful." })] }), !parsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => inputRef.current?.click(),
						onDragOver: (e) => e.preventDefault(),
						onDrop: (e) => {
							e.preventDefault();
							const file = e.dataTransfer.files[0];
							if (file) handleFile(file);
						},
						className: "flex min-h-36 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-surface-2 px-4 py-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileSpreadsheet, { className: "size-6 text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: "Drop a spreadsheet or browse"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: ".csv, .xlsx, .xls"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: inputRef,
						type: "file",
						accept: ".csv,.txt,.xlsx,.xls,text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
						className: "sr-only",
						onChange: (e) => {
							const file = e.target.files?.[0];
							if (file) handleFile(file);
						}
					}),
					busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Reading file…"
					}) : null,
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-down",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: downloadTemplate,
						className: "text-left text-xs text-muted underline-offset-4 hover:text-fg hover:underline",
						children: "Download a 5-row template"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							fileName,
							" · ",
							parsed.records.length.toLocaleString("en-LK"),
							" rows · ",
							parsed.headers.length,
							" columns"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: [...REQUIRED_FIELDS, ...OPTIONAL].map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "grid grid-cols-[1fr_1.2fr] items-center gap-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("text-muted", REQUIRED_FIELDS.includes(field) && "text-fg"),
								children: [FIELD_LABELS[field], REQUIRED_FIELDS.includes(field) ? " *" : ""]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: mapping[field] ?? "",
								onChange: (e) => setMapping((m) => ({
									...m,
									[field]: e.target.value || void 0
								})),
								className: "h-11 rounded-md border border-border bg-surface-2 px-3 text-sm text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Ignore"
								}), parsed.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: h,
									children: h
								}, h))]
							})]
						}, field))
					}),
					warnings.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("text-sm", w.level === "error" ? "text-down" : "text-warn"),
						children: w.message
					}, w.message)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							onClick: apply,
							disabled: !mapping.date || !mapping.revenue,
							children: "Load dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							onClick: reset,
							children: "Choose another file"
						})]
					})
				]
			})]
		})]
	});
}
function AppHeader() {
	const { source, loadDemo, analytics, filters } = useMarket();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium tracking-[0.22em] text-primary uppercase",
					children: "Sales & market intelligence"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-1 text-[2.35rem] leading-[0.95] tracking-tight text-fg sm:text-5xl",
					children: "Market Pulse"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted",
					children: "See where products, customers and revenue are performing across Sri Lanka — then load your own spreadsheet."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border px-3 py-2 text-xs tabular-nums text-muted",
					children: formatPeriodLabel(filters.year, analytics.dateMax)
				}),
				source === "upload" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "sm",
					onClick: loadDemo,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Demo data"]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UploadDialog, {})
			]
		})]
	});
}
function ChipGroup({ label, value, options, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] font-medium tracking-[0.14em] text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: options.map((opt) => {
				const on = opt.value === value;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(opt.value),
					className: cn("h-9 rounded-full border px-3 text-xs font-medium transition-colors duration-150", on ? "border-primary/40 bg-primary text-primary-foreground" : "border-border bg-transparent text-muted hover:text-fg hover:bg-accent"),
					children: opt.label
				}, opt.value);
			})
		})]
	});
}
function FilterBar() {
	const { analytics, filters, setFilter, resetFilters, source, fileName } = useMarket();
	const years = analytics.years.length ? analytics.years : [
		2024,
		2025,
		2026
	];
	const dirty = filters.year !== 2026 || filters.province !== "All" || filters.district !== "All" || filters.category !== "All";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-5 rounded-xl border border-border bg-card px-5 py-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-baseline justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					source === "demo" ? "Demo dataset" : "Uploaded",
					" · ",
					fileName,
					" · ",
					analytics.current.length.toLocaleString("en-LK"),
					" ",
					"rows in view · ",
					formatPeriodLabel(filters.year, analytics.dateMax)
				]
			}), dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: resetFilters,
				className: "text-xs text-muted underline-offset-4 hover:text-fg hover:underline",
				children: "Reset filters"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
					label: "Year",
					value: String(filters.year),
					options: [...years.map((y) => ({
						value: String(y),
						label: y === 2026 ? "2026 YTD" : String(y)
					})), {
						value: "all",
						label: "All"
					}],
					onChange: (v) => setFilter("year", v === "all" ? "all" : Number(v))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
					label: "Region",
					value: filters.province,
					options: [{
						value: "All",
						label: "All"
					}, ...analytics.provinces.filter(Boolean).map((p) => ({
						value: p,
						label: p
					}))],
					onChange: (v) => setFilter("province", v)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
					label: "Category",
					value: filters.category,
					options: [{
						value: "All",
						label: "All"
					}, ...analytics.categories.map((c) => ({
						value: c,
						label: c
					}))],
					onChange: (v) => setFilter("category", v)
				}),
				filters.province !== "All" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
					label: "District",
					value: filters.district,
					options: [{
						value: "All",
						label: "All"
					}, ...analytics.districts.filter((d) => analytics.byDistrict.find((x) => x.district === d)?.province === filters.province).map((d) => ({
						value: d,
						label: d
					}))],
					onChange: (v) => setFilter("district", v)
				}) : filters.district !== "All" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipGroup, {
					label: "District",
					value: filters.district,
					options: [{
						value: "All",
						label: "All"
					}, {
						value: filters.district,
						label: filters.district
					}],
					onChange: (v) => setFilter("district", v)
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "self-end text-xs text-muted",
					children: "Click a district on the map to drill in."
				})
			]
		})]
	});
}
var Card = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border border-border bg-card text-fg shadow-[var(--shadow-panel)]", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col gap-1 px-5 pt-5 pb-2", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
	ref,
	className: cn("text-sm font-medium tracking-wide text-fg", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-xs text-muted", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = (0, import_react.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("px-5 pb-5", className),
	...props
}));
CardContent.displayName = "CardContent";
var ICONS = {
	growth: TrendingUp,
	concentration: Layers,
	opportunity: Compass,
	customer: Users,
	risk: TriangleAlert,
	market: ScanSearch
};
var TONE = {
	growth: "text-up",
	concentration: "text-warn",
	opportunity: "text-primary",
	customer: "text-fg",
	risk: "text-down",
	market: "text-primary"
};
function InsightsPanel() {
	const { insights, regenerateInsights, analytics } = useMarket();
	function onGenerate() {
		regenerateInsights();
		document.getElementById("insight-engine")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		id: "insight-engine",
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Insight engine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "What should I look at? Signals from the current filters — no model required."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "button",
				size: "sm",
				onClick: onGenerate,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, {}), "Generate insights"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "grid gap-3",
			children: [insights.map((ins) => {
				const Icon = ICONS[ins.kind];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "grid gap-1 rounded-lg border border-border bg-surface-2 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: cn("flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase", TONE[ins.kind]),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }), ins.title]
						}), ins.metric ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tabular-nums text-muted",
							children: ins.metric
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: ins.body
					})]
				}, ins.id);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] text-muted",
				children: [
					"Compared with the previous period",
					analytics.previous.length ? ` (${analytics.previous.length.toLocaleString("en-LK")} rows)` : "",
					". Change a filter and generate again."
				]
			})]
		})]
	});
}
var ITEMS = [
	{
		key: "revenue",
		label: "Revenue",
		icon: Wallet,
		compact: true
	},
	{
		key: "orders",
		label: "Orders",
		icon: ShoppingBag,
		compact: false
	},
	{
		key: "customers",
		label: "Customers",
		icon: Users,
		compact: false
	},
	{
		key: "aov",
		label: "Avg. order value",
		icon: Receipt,
		compact: false
	}
];
function KpiCards() {
	const { analytics } = useMarket();
	const { kpis } = analytics;
	const values = {
		revenue: {
			value: formatLkr(kpis.revenue, true),
			delta: kpis.revenueDelta
		},
		orders: {
			value: formatNumber(kpis.orders),
			delta: kpis.ordersDelta
		},
		customers: {
			value: formatNumber(kpis.customers),
			delta: kpis.customersDelta
		},
		aov: {
			value: formatLkr(kpis.aov),
			delta: kpis.aovDelta
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grid grid-cols-2 gap-3 xl:grid-cols-4",
		children: ITEMS.map((item) => {
			const Icon = item.icon;
			const v = values[item.key];
			const tone = deltaTone(v.delta);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-border bg-card px-4 py-4 shadow-[var(--shadow-panel)] sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-medium tracking-[0.14em] text-muted uppercase",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-muted" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-sans text-2xl font-medium tracking-tight tabular-nums sm:text-[1.75rem]",
						children: v.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("mt-1 text-xs tabular-nums", tone === "up" && "text-up", tone === "down" && "text-down", tone === "muted" && "text-muted"),
						children: v.delta === null ? "No prior period" : `${formatPct(v.delta)} vs prior period`
					})
				]
			}, item.key);
		})
	});
}
var MODES = [
	{
		id: "revenue",
		label: "Revenue"
	},
	{
		id: "growth",
		label: "Growth"
	},
	{
		id: "customers",
		label: "Customers"
	},
	{
		id: "penetration",
		label: "Density"
	}
];
function metricValue(mode, row) {
	if (mode === "revenue") return row.revenue;
	if (mode === "growth") return row.growth ?? 0;
	if (mode === "customers") return row.customers;
	return row.penetration;
}
function formatMetric(mode, row) {
	if (mode === "revenue") return formatLkr(row.revenue, true);
	if (mode === "growth") return formatPct(row.growth);
	if (mode === "customers") return formatNumber(row.customers);
	return `${(row.penetration * 1e3).toFixed(1)} per 1k`;
}
function MapPanel() {
	const { analytics, filters, mapMode, setMapMode, selectDistrict } = useMarket();
	const [hover, setHover] = (0, import_react.useState)(null);
	const stats = new Map(analytics.byDistrict.map((d) => [d.district, d]));
	const values = analytics.byDistrict.map((d) => metricValue(mapMode, d));
	const max = Math.max(...values.map((v) => Math.abs(v)), 1e-9);
	const hoverRow = hover ? stats.get(hover) : null;
	const selected = filters.district !== "All" ? filters.district : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Sri Lanka" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: "Click a district to filter the dashboard."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1",
				children: MODES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMapMode(m.id),
					className: cn("h-8 rounded-full border px-2.5 text-[11px] font-medium", mapMode === m.id ? "border-primary/40 bg-primary text-primary-foreground" : "border-border text-muted hover:text-fg"),
					children: m.label
				}, m.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-[1fr_9.5rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute top-1 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-muted uppercase",
						children: "North"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: SRI_LANKA_MAP.viewBox,
						role: "img",
						"aria-label": "Map of Sri Lanka districts",
						className: "h-auto w-full",
						children: SRI_LANKA_MAP.districts.map((d) => {
							const row = stats.get(d.name);
							const raw = row ? metricValue(mapMode, row) : 0;
							const t = Math.min(1, Math.abs(raw) / max);
							const active = selected === d.name;
							const isHover = hover === d.name;
							const fill = mapMode === "growth" && raw < 0 ? `color-mix(in oklab, var(--color-down) ${Math.round(28 + t * 55)}%, var(--color-surface-2))` : `color-mix(in oklab, var(--color-primary) ${Math.round(18 + t * 62)}%, var(--color-surface-2))`;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: d.path,
								fill: active ? "var(--color-primary)" : fill,
								stroke: isHover || active ? "var(--color-fg)" : "var(--color-bg)",
								strokeWidth: active || isHover ? 2.4 : 1.2,
								className: "cursor-pointer transition-[fill,stroke-width] duration-150",
								onMouseEnter: () => setHover(d.name),
								onMouseLeave: () => setHover(null),
								onClick: () => selectDistrict(d.name),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: d.name })
							}, d.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] text-muted uppercase",
						children: "South"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col justify-between gap-3 rounded-lg bg-surface-2 p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.14em] text-muted uppercase",
						children: "Focus"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: hover ?? selected ?? "All districts"
					}),
					hoverRow ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-3 grid gap-1.5 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Province"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: hoverRow.province })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: MODES.find((m) => m.id === mapMode)?.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatMetric(mapMode, hoverRow)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: "Revenue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums",
									children: formatLkr(hoverRow.revenue, true)
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-muted",
						children: "Hover or tap a district."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted",
					children: "Western, Central, Southern, Northern and the rest of the island."
				})]
			})]
		}) })]
	});
}
function ProductPerformance() {
	const { analytics } = useMarket();
	const items = analytics.byProduct.slice(0, 8);
	const max = items[0]?.revenue || 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Product performance" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "grid gap-3",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "No product column in this file."
			}) : items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between gap-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate",
						children: p.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 tabular-nums text-muted",
						children: [
							Math.round(p.share * 100),
							"%",
							p.growth !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("ml-2", p.growth >= 0 ? "text-up" : "text-down"),
								children: formatPct(p.growth)
							}) : null
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 overflow-hidden rounded-full bg-surface-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-primary",
						style: { width: `${Math.max(4, p.revenue / max * 100)}%` }
					})
				})]
			}, p.name))
		})]
	});
}
function OpportunityPanel() {
	const { analytics } = useMarket();
	const opportunities = analytics.byProduct.filter((p) => (p.growth ?? 0) > .08 && p.share < .12).sort((a, b) => (b.growth ?? 0) - (a.growth ?? 0)).slice(0, 5);
	const regions = analytics.byProvince.filter((p) => (p.growth ?? 0) > .08 && p.share < .15).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Market opportunities" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
			className: "grid gap-3",
			children: [
				opportunities.length === 0 && regions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "No high-growth, low-share items in this slice."
				}) : null,
				regions.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-lg bg-surface-2 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 text-up" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: r.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								formatPct(r.growth),
								" growth · ",
								Math.round(r.share * 100),
								"% share · ",
								formatLkr(r.revenue, true)
							]
						})]
					})]
				}, r.name)),
				opportunities.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3 rounded-lg bg-surface-2 px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "mt-0.5 size-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								formatPct(p.growth),
								" growth · ",
								Math.round(p.share * 100),
								"% of sales"
							]
						})]
					})]
				}, p.name))
			]
		})]
	});
}
function useMounted() {
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setOn(true), []);
	return on;
}
function ChartFrame({ children }) {
	if (!useMounted()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-56 rounded-md bg-surface-2" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56",
		children
	});
}
function tooltipStyle() {
	return {
		background: "#161b1d",
		border: "1px solid #232a2c",
		borderRadius: 8,
		fontSize: 12,
		color: "#e6eeec"
	};
}
function RevenueTrend() {
	const { analytics } = useMarket();
	const data = analytics.trend.map((p) => ({
		...p,
		revenueM: p.revenue
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue trend" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "revFill",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#7eb8ab",
							stopOpacity: .28
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#7eb8ab",
							stopOpacity: 0
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "#232a2c",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "label",
						tick: {
							fill: "#8b9794",
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						interval: "preserveStartEnd"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: "#8b9794",
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						width: 52,
						tickFormatter: (v) => formatLkr(v, true).replace("Rs. ", "")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: tooltipStyle(),
						formatter: (value) => [formatLkr(Number(value), true), "Revenue"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "revenue",
						stroke: "#7eb8ab",
						strokeWidth: 2,
						fill: "url(#revFill)"
					})
				]
			})
		}) }) })]
	});
}
function RegionChart() {
	const { analytics, setFilter, filters } = useMarket();
	const data = analytics.byProvince.slice(0, 9).map((p) => ({
		name: p.name.replace(" Province", ""),
		revenue: p.revenue,
		share: p.share
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "min-w-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue by region" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				layout: "vertical",
				margin: {
					top: 4,
					right: 12,
					left: 8,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "#232a2c",
						horizontal: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						tick: {
							fill: "#8b9794",
							fontSize: 11
						},
						tickLine: false,
						axisLine: false,
						tickFormatter: (v) => formatLkr(v, true).replace("Rs. ", "")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "name",
						width: 108,
						tick: {
							fill: "#e6eeec",
							fontSize: 11
						},
						tickLine: false,
						axisLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						contentStyle: tooltipStyle(),
						formatter: (value) => [formatLkr(Number(value), true), "Revenue"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "revenue",
						fill: "#7eb8ab",
						radius: [
							0,
							4,
							4,
							0
						],
						cursor: "pointer",
						onClick: (entry) => {
							const name = entry.name;
							if (name) setFilter("province", filters.province === name ? "All" : name);
						}
					})
				]
			})
		}) }) })]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dashboard, {}) });
}
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCards, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueTrend, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPanel, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionChart, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductPerformance, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpportunityPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsightsPanel, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border pt-4 pb-8 text-xs text-muted",
				children: "Figures are computed in the browser from the loaded file. Demo data is synthetic Sri Lankan retail, 2024–2026."
			})
		]
	});
}
//#endregion
export { Home as component };
