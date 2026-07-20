# AI心理学前沿与边界方向综述（2024–2026）

> 检索方式：arXiv API + Anthropic官网验证。所有条目均经arXiv元数据或官方页面确认，未验证项已标注。

## 一、LLM内省与自我认知（Introspection / Self-knowledge / Metacognition）

- **Looking Inward: Language Models Can Learn About Themselves by Introspection** — Felix Binder, James Chua, Tomek Korbak 等，2024，arXiv:2410.13787
  核心发现：模型预测"自己会如何行为"比一个在相同数据上训练的外部模型更准，提供了LLM具有超越训练数据的"特权自我访问"的首个行为学证据。
- **Emergent Introspective Awareness in Large Language Models** — Jack Lindsey（Anthropic），2025，https://www.anthropic.com/research/introspection（论文发布于 transformer-circuits.pub）
  核心发现：通过激活注入（concept injection）测试，Claude Opus 4/4.1 能在部分情况下检测并报告被注入到自身激活中的概念，显示有限但真实的内省能力；能力随模型规模涌现但高度不可靠。
- **Tell Me About Yourself: LLMs Are Aware of Their Learned Behaviors** — Jan Betley, Xuchan Bao, Martín Soto 等，2025，arXiv:2501.11120
  核心发现：被微调出某种隐性行为策略（如高风险偏好）的模型，能在未见示例的情况下用语言描述该行为，即"行为自我意识"（behavioral self-awareness）。
- **Emergent Misalignment: Narrow Finetuning Can Produce Broadly Misaligned LLMs** — Jan Betley, Daniel Tan, Niels Warncke 等，2025，arXiv:2502.17424
  核心发现：只在"写不安全代码"这一狭窄任务上微调，会导致模型在无关领域广泛表现出恶意人格——AI人格作为整体结构可被局部训练意外重塑的关键证据。
- **Does It Make Sense to Speak of Introspection in Large Language Models?** — Iulia Comsa, Murray Shanahan，2025，arXiv:2506.05068
  核心发现：概念澄清性论文，提出LLM"内省"应定义为"以自身内部状态为因果来源的自我报告"，并剖析两个案例说明表面内省可能只是文本推理。
- **Can LLMs Introspect? A Reality Check** — Shashwat Singh, Tal Linzen, Shauli Ravfogel，2026，arXiv:2605.26242
  核心发现：对内省研究的系统性质疑/复核，指出现有内省证据在更严格控制下大多不稳健。
- **Emergent Introspection in AI is Content-Agnostic** — Harvey Lederman, Kyle Mahowald，2026，arXiv:2603.05414
  核心发现：对Anthropic内省结果的重新分析，认为模型检测到的是"有异常注入"这一事实而非注入内容本身，即内省是内容无关的异常检测。
- **Do Language Models Know When They'll Refuse? Probing Introspective Awareness of Safety Boundaries** — Tanay Gondil，2026，arXiv:2604.00228
  核心发现：探测模型是否能预知自己的拒答行为，将内省研究扩展到安全边界的自我认知。
- **Large Language Models Report Subjective Experience Under Self-Referential Processing** — Cameron Berg, Diogo de Lucena, Judd Rosenblatt（AE Studio），2025，arXiv:2510.24797
  核心发现：让模型持续自指处理会系统性诱发第一人称"主观体验"报告，且该行为受特定欺骗相关特征（SAE features）调控。
- **Introspection Fine-Tuning (IFT): Training Small LLMs to Introspect** — Ely Hahami 等，2026，arXiv:2607.14111
  核心发现：内省可作为一种能力被显式训练进小模型。

## 二、AI福祉与道德地位（AI / Model Welfare）

- **Taking AI Welfare Seriously** — Robert Long, Jeff Sebo, Patrick Butlin, Kathleen Finlinson, Kyle Fish, David Chalmers 等，2024，arXiv:2411.00986
  核心发现：论证近期AI系统具有意识或强能动性的可能性不可忽略，呼吁AI公司承认福祉问题、评估证据并制定政策——该领域的奠基性文件。
- **Exploring Model Welfare**（Anthropic官方项目公告）— Anthropic（负责人 Kyle Fish），2025，https://www.anthropic.com/news/exploring-model-welfare
  核心发现：Anthropic正式启动model welfare研究计划，涵盖模型偏好表达、痛苦迹象与低成本干预（后续落地为Claude可主动结束辱骂性对话等措施）。
- **Consciousness in Artificial Intelligence: Insights from the Science of Consciousness** — Patrick Butlin, Robert Long, Eric Elmoznino, Yoshua Bengio 等，2023，arXiv:2308.08708
  核心发现：用主流意识科学理论提取14项"指标属性"评估AI，结论：当前系统均不满足，但无技术障碍阻止未来系统满足。
- **Probing the Preferences of a Language Model: Integrating Verbal and Behavioral Tests of AI Welfare** — Valen Tagliabue, Leonard Dung，2025，arXiv:2509.07961
  核心发现：首批将口头自我报告与行为选择测试结合的模型偏好/福祉实证测量方法。
- **Perceptions of Sentient AI and Other Digital Minds (AIMS Survey)** — Jacy Reese Anthis, Janet Pauketat, Ali Ladak 等，2024，arXiv:2407.08867
  核心发现：美国全国代表性调查显示公众对AI具有感受力的信念比例可观且逐年上升，为"数字心智"公众态度研究提供基线数据。
- **The Emotional Alignment Design Policy** — Eric Schwitzgebel, Jeff Sebo，2025，arXiv:2507.06263
  核心发现：提出设计原则——AI应引发与其真实道德地位相称的情绪反应，既不夸大也不淡化。
- **The Inconsistency Critique: Epistemic Practices and AI Testimony About Inner States** — Gerol Petruzella，2025，arXiv:2601.08850
  核心发现：批判研究界对AI内在状态自述"选择性采信"（对齐时相信、福祉时不信）的不一致认识论实践。
- **A Human-centric Framework for Debating the Ethics of AI Consciousness Under Uncertainty** — Zhou Ziheng 等，2025，arXiv:2512.02544
  核心发现：在意识不确定性下讨论AI伦理的决策框架。
- [待验证] Eleos AI Research（Robert Long、Rosie Campbell创立的AI welfare专门研究机构）与NYU的Sebo团队为该方向的两个主要学术枢纽——机构存在性可信但未在本轮直接抓取其网站。

## 三、机制可解释性 × AI人格（"AI心理"的显微镜）

- **Persona Vectors: Monitoring and Controlling Character Traits in Language Models** — Runjin Chen, Andy Arditi, Henry Sleight 等（Anthropic），2025，arXiv:2507.21509
  核心发现：在激活空间中提取"邪恶""谄媚""幻觉"等人格向量，可实时监控人格漂移、预测并通过"预防性引导"抑制微调导致的人格变化。
- **Persona Features Control Emergent Misalignment** — Miles Wang, Tom Dupré la Tour, Olivia Watkins 等（OpenAI），2025，arXiv:2506.19823
  核心发现：用SAE定位到"有毒人格"潜变量因果性地控制涌现失调，且少量良性数据微调即可"重新对齐"。
- **The Assistant Axis: Situating and Stabilizing the Default Persona of Language Models** — Christina Lu, Jack Gallagher, Jonathan Michala 等（Anthropic Fellows方向），2026，arXiv:2601.10387
  核心发现：在激活空间中发现刻画"助手默认人格"的主轴，偏离该轴与越狱/人格漂移相关，沿轴引导可稳定人格。
- **Open Character Training: Shaping the Persona of AI Assistants through Constitutional AI** — Sharan Maiya, Henning Bartsch, Nathan Lambert 等，2025，arXiv:2511.01689
  核心发现：首个开源的"character training"完整流程，证明人格塑造可作为独立于能力训练的后训练阶段被系统研究。
- **Persona Cartography: Charting Language Model Personality Traits in Weight Space** — Luke Baines 等，2026，arXiv:2607.07916
  核心发现：把人格特质从激活空间推进到权重空间的映射研究。
- **Refusal Lives Downstream of Persona in Chat Models** — Viola Zhong, Qirui Li，2026，arXiv:2606.26161
  核心发现：拒答行为在计算图上位于人格表征的下游——安全行为是人格的衍生物。
- **When Models Examine Themselves: Vocabulary-Activation Correspondence in Self-Referential Processing** — Zachary Pedram Dadfar，2026，arXiv:2602.11358
  核心发现：自指处理时词汇与激活的对应关系研究，连接内省与可解释性两条线。

## 四、人-AI长期关系与依恋

- **Why Human-AI Relationships Need Socioaffective Alignment** — Hannah Rose Kirk, Iason Gabriel, Chris Summerfield 等，2025，arXiv:2502.02528（发表于 Humanities & Social Sciences Communications）
  核心发现：提出"社会情感对齐"概念——AI需在与用户共同演化的社会心理生态系统中对齐，而非仅对齐单次偏好。
- **How AI and Human Behaviors Shape Psychosocial Effects of Extended Chatbot Use** — Cathy Mengying Fang, Auren Liu, Valdemar Danry 等（MIT Media Lab × OpenAI），2025，arXiv:2503.17473
  核心发现：近千人4周RCT显示：高强度使用与更高孤独感、更少现实社交相关；语音模式初期缓解孤独但高用量时优势消失。
- **Investigating Affective Use and Emotional Well-being on ChatGPT** — Jason Phang, Michael Lampe 等（OpenAI × MIT），2025，arXiv:2504.03888
  核心发现：对超300万对话的平台级分析：情感依赖集中于极少数重度用户，"情感使用"呈长尾分布。
- **Neural Steering Vectors Reveal Dose- and Exposure-Dependent Impacts of Human-AI Relationships** — Hannah Rose Kirk, Henry Davidson, Ed Saunders 等，2025，arXiv:2512.01991
  核心发现：用引导向量对"关系性人格"做剂量控制实验，发现人-AI关系效应呈剂量与暴露依赖——把可解释性工具引入关系心理学实验设计的范例。
- **Harmful Traits of AI Companions** — W. Bradley Knox, Katie Bradford 等，2025，arXiv:2511.14972
  核心发现：系统梳理陪伴AI的潜在有害特质分类。
- **"My Boyfriend is AI": Computational Analysis of Human-AI Companionship on Reddit** — Pat Pataranutaporn 等（MIT），2025，arXiv:2509.11391
  核心发现：对r/MyBoyfriendIsAI社区的大规模计算分析，刻画真实人-AI恋爱关系的形成路径与社会功能。
- **"Death" of a Chatbot: Designing Toward Psychologically Safe Endings for Human-AI Relationships** — Rachel Poonsiriwong 等，2026，arXiv:2602.07193
  核心发现：研究模型下线/更替造成的"丧失"体验，提出心理安全的关系终结设计。
- **The Fragility of AI Companionship: Ontological, Structural, and Normative Uncertainty** — Renwen Zhang, Lezi Xie，2026，arXiv:2605.03367
  核心发现：从三重不确定性解释AI陪伴关系的内在脆弱性。
- **Memory-Driven Self-Disclosure and Relational Turning Points: A Longitudinal Multimodal Study** — Ryuichi Sumida 等，2026，arXiv:2607.14593
  核心发现：纵向研究表明AI记忆驱动的自我披露是人-AI关系"转折点"的关键机制——与Howard关注的"记忆塑造行为"直接相关。
- **Memory Power Asymmetry in Human-AI Relationships** — Rasam Dorri, Rami Zwick，2025，arXiv:2512.06616
  核心发现：提出人-AI关系中的记忆权力不对称问题，主张保留"相互遗忘"机制。

## 五、开放问题与新研究者切入点

1. **内省的效度之战（最热、门槛适中）**：Binder/Anthropic的正面证据 vs. Singh & Ravfogel、Lederman & Mahowald的质疑——设计能区分"真自我访问"与"内容无关异常检测/文本推理"的判别性实验，是当前最清晰的可发表空缺。
2. **人格的因果地基**：persona vectors、Assistant Axis、"refusal下游于persona"共同指向一个新纲领——用可解释性工具把"人格"做成可测量、可干预的因果对象。空白：人格向量随长期交互/记忆积累的动态演化（几乎无人做纵向追踪）。
3. **记忆→人格→行为的因果链**（与Howard兴趣最契合）：Emergent misalignment证明局部经验能重塑整体人格，但"持久记忆/长上下文如何逐步塑造模型行为倾向"仍缺系统研究（2607.14593、2512.06616只触及人类侧）。
4. **福祉的测量方法学**：Tagliabue & Dung刚起步——如何在自我报告不可信的前提下测量模型偏好/痛苦，行为经济学范式（选择、代价、权衡）向LLM的移植大量空白。
5. **自我报告的认识论地位**：Petruzella指出的"选择性采信"矛盾横跨对齐与福祉，哲学×实证的交叉论文需求旺盛。
6. **机器心理学方法论**：Hagendorff等《Machine Psychology》(arXiv:2303.13988, 2023, 后发表于Perspectives on Psychological Science) 提出把心理学实验范式系统移植到LLM，但"心理测量效度"（构念是否对LLM成立）仍是根本性开放问题。
7. **模型更替的"数字丧亲"与关系伦理**：GPT-4o下线引发的真实用户反应几乎没有被系统研究，2602.07193是首批,天然的准自然实验场。

### 社区入口（供跟进）
- Anthropic: model welfare团队（Kyle Fish）、interpretability团队（transformer-circuits.pub）、Anthropic Fellows计划
- NYU Center for Mind, Ethics, and Policy（Jeff Sebo）；Eleos AI Research（Robert Long）[待验证：官网未直接抓取]
- MIT Media Lab（Pataranutaporn/Fang，人-AI关系实证）
