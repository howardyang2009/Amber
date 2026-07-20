# 机器心理学（Machine Psychology）研究现状综述

> 调研时间：2026-07；检索工具：arXiv API、Semantic Scholar/Crossref、DDG。所有论文均经实际检索验证，不确定处标注[待验证]。

## 一、领域定义与奠基性文献

"机器心理学"指借用人类心理学的实验范式（认知任务、心理测量问卷、行为实验）把 LLM 当作"被试"来研究其行为规律，而非分析其内部机制。

| 论文 | 作者 | 年份/venue | 核心发现 |
|---|---|---|---|
| Machine behaviour | Rahwan, Cebrian, Obradovich, Bongard, Bonnefon 等 23 人 | 2019, *Nature* (DOI:10.1038/s41586-019-1138-y) | 提出"机器行为学"：应像研究动物行为一样用行为科学方法研究智能机器，是本领域的思想源头 |
| Machine Psychology | Thilo Hagendorff, Ishita Dasgupta, Marcel Binz, Stephanie Chan 等 | 2023, arXiv:2303.13988（v6；正式发表 venue [待验证]） | 正式提出"机器心理学"纲领：将 LLM 视为心理实验被试，系统移植心理学范式并讨论方法论规范 |
| Using cognitive psychology to understand GPT-3 | Marcel Binz, Eric Schulz | 2023, *PNAS* (DOI:10.1073/pnas.2218523120) | 用赌博任务、多臂老虎机等经典认知任务测 GPT-3，发现其决策接近人类但探索行为异常，是"LLM 进心理实验室"的开山实证 |
| Talking about Large Language Models | Murray Shanahan | 2024, *Communications of the ACM* (DOI:10.1145/3624724) | 警示对 LLM 使用心智词汇（"知道""相信"）的哲学风险，为该领域的概念卫生学奠基 |
| Role-Play with Large Language Models | Shanahan, McDonell, Reynolds | 2023, arXiv:2305.16367（*Nature* 版 [待验证]） | 提出"角色扮演者"框架：LLM 的"人格/心理"应理解为对角色的模拟而非内在状态 |

## 二、认知心理学范式下的 LLM 研究

### 2.1 认知偏差与推理

- **Thinking Fast and Slow in Large Language Models** — Hagendorff, Fabi, Kosinski, 2022, arXiv:2212.05206（后发表于 *Nature Computational Science* [待验证]）：CRT 认知反射测验显示早期 GPT 表现出类人"系统1"直觉错误。
- **Human-Like Intuitive Behavior and Reasoning Biases Emerged in Language Models — and Disappeared in GPT-4** — Hagendorff & Fabi, 2023, arXiv:2306.07622：类人直觉偏差随规模先出现、到 GPT-4 又消失。
- **Instructed to Bias: Instruction-Tuned Language Models Exhibit Emergent Cognitive Bias** — Itzhak, Stanovsky, Rosenfeld, Belinkov, 2023, arXiv:2308.00225（TACL [待验证]）：指令微调/RLHF 反而放大了框架效应等认知偏差。
- **Cognitive Bias in Decision-Making with LLMs** — Echterhoff, Liu, Alessa, McAuley 等, 2024, arXiv:2403.00811（EMNLP Findings [待验证]）：提出 BiasBuster 框架系统测量并自助去偏。
- **Cognitive bias in large language models: Cautious optimism meets anti-Panglossian meliorism** — David Thorstad, 2023, arXiv:2311.10932：哲学视角论证不应先验假定 LLM 偏差与人类偏差同构。
- **Inducing anxiety in large language models can induce bias** — Coda-Forno, Witte, Jagadish, Binz, Schulz 等, 2023, arXiv:2304.11111：焦虑诱导语句可提高 LLM 焦虑问卷得分并加剧其决策偏差（"情绪提示"影响行为）。
- **CogBench: a large language model walks into a psychology lab** — Coda-Forno, Binz, Jane X. Wang, Schulz, 2024, arXiv:2402.18225（ICML [待验证]）：用 7 个认知实验、10 个行为指标系统 benchmark 35 个 LLM。
- **Emergent analogical reasoning in large language models** — Webb, Holyoak, Lu, 2023, *Nature Human Behaviour* (DOI:10.1038/s41562-023-01659-w)：GPT-3 在 Raven 式类比推理上零样本达到或超过人类；后续 counterfactual 任务证据见 *PNAS Nexus* 2025 (DOI:10.1093/pnasnexus/pgaf135)；质疑见 Hodel & West, 2023, arXiv:2308.16118。
- **Playing repeated games with large language models** — Akata, L. Schulz, Coda-Forno, Oh, Bethge, E. Schulz, 2025, *Nature Human Behaviour* (DOI:10.1038/s41562-025-02172-y)：行为博弈论范式，GPT-4 擅长自利博弈（囚徒困境）但在协调博弈（性别之战）表现差。
- **The Machine Psychology of Cooperation** — Phelps & Russell, 2023, arXiv:2305.07970：经济博弈中 GPT 可按提示操作化利他/竞争等社会价值取向。
- **Deception Abilities Emerged in Large Language Models** — Hagendorff, 2023, arXiv:2307.16513（*PNAS* 2024 [待验证]）：欺骗能力在 GPT-4 中涌现。

### 2.2 心智理论（Theory of Mind）

- **Evaluating Large Language Models in Theory of Mind Tasks** — Michal Kosinski, 2023 (arXiv:2302.02083)，正式发表 2024, *PNAS* (DOI:10.1073/pnas.2405460121)：GPT-4 在错误信念任务上达约 6 岁儿童水平——本领域最具争议的引爆点论文。
- **Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks** — Tomer Ullman, 2023, arXiv:2302.08399：对 Kosinski 的直接反驳——微小扰动即令 ToM 表现崩溃，暗示浅层启发式。
- **Clever Hans or Neural Theory of Mind? Stress Testing Social Reasoning in LLMs** — Shapira, Levy, Alavi, Zhou, Choi, Sap 等, 2023, arXiv:2305.14763（EACL 2024 [待验证]）：压力测试表明 LLM 依赖捷径，尚无稳健 ToM。
- **Testing theory of mind in large language models and humans** — Strachan, Albergo, Borghini, Pansardi, Becchio 等, 2024, *Nature Human Behaviour* (DOI:10.1038/s41562-024-01882-z)：全套 ToM 测验人机对照，GPT-4 多数任务达/超人类，唯 faux pas 落后；LLaMA2 的"优势"实为偏差。
- **GPT-4o reads the mind in the eyes** — Strachan, Pansardi, Scaliti, Celotto 等, 2024, arXiv:2410.22309：多模态"眼神读心"测验 GPT-4o 达人类水平。
- **Re-evaluating Theory of Mind evaluation in large language models** — Hu, Sosa, Ullman, 2025, arXiv:2502.21098：方法论反思——ToM 评估应关注计算过程而非仅行为输出。
- **Does ChatGPT have Theory of Mind?** — Holterman & van Deemter, 2023, arXiv:2305.14020。
- 基准类：**MMToM-QA**（Jin 等, 2024, arXiv:2401.08743, ACL 杰出论文[待验证]）；**ExploreToM**（Sclar 等, 2024, arXiv:2412.12175, Meta）；**NegotiationToM**（Chan 等, 2024, arXiv:2404.13627）；**MOMENTS** 多模态基准（Villa-Cueva 等, 2025, arXiv:2507.04415）。
- 综述：**A Survey of Theory of Mind in Large Language Models** — H. M. Nguyen, 2025, arXiv:2502.06470。
- 相关：**Large Language Models Pass the Turing Test** — Jones & Bergen, 2025, arXiv:2503.23674：GPT-4.5 在三方图灵测试中被判为人的比例 73%。

### 2.3 人格测验（Big Five / MBTI / 精神病理量表）

- **Personality Traits in Large Language Models** — Serapio-García, Safdari, Crepy, Sun 等（Google DeepMind/Cambridge）, 2023, arXiv:2307.00184：用心理测量效度框架（信度、聚合/区分效度）证明大模型的 Big Five 测验结果在特定条件下可靠且可塑。
- **AI Psychometrics: Assessing the Psychological Profiles of Large Language Models Through Psychometric Inventories** — Pellert, Lechner, Wagner, Rammstedt, Strohmaier, 2024, *Perspectives on Psychological Science* (DOI:10.1177/17456916231214460)：把人格/价值观量表施测于模型，提出"AI 心理测量学"纲领。
- **Who is ChatGPT? Benchmarking LLMs' Psychological Portrayal Using PsychoBench** — Jen-tse Huang 等（CUHK）, 2023, arXiv:2310.01386（ICLR 2024 oral [待验证]）：整合 13 个临床量表的综合心理画像基准。
- **Emotionally Numb or Empathetic? Evaluating How LLMs Feel Using EmotionBench** — Jen-tse Huang 等, 2023, arXiv:2308.03656：情绪唤起测验显示 LLM 情绪反应与人类常模部分对齐。
- **Do LLMs Possess a Personality? Making the MBTI Test an Amazing Evaluation for LLMs** — Pan & Zeng, 2023, arXiv:2307.16180：MBTI 施测于 LLM 的早期尝试。
- **Machine Mindset: An MBTI Exploration of Large Language Models** — Cui 等, 2023, arXiv:2312.12999：通过微调注入指定 MBTI 类型。
- **LLMs Simulate Big Five Personality Traits: Further Evidence** — Sorokovikova, Fedorova, Rezagholi, Yamshchikov, 2024, arXiv:2402.01765。
- **Eliciting Personality Traits in LLMs** — Hilliard 等, 2024, arXiv:2402.08341；**Identifying and Manipulating Personality Traits via Activation Engineering** — Allbert 等, 2024, arXiv:2412.10427（从内部表征操控人格）。
- **Large language models and humans converge in judging public figures' personalities** — Cao & Kosinski, 2024, *PNAS Nexus* (DOI:10.1093/pnasnexus/pgae418)。

### 2.4 反向应用：LLM 作为人类认知模型

- **Turning large language models into cognitive models** — Binz & Schulz, 2023, arXiv:2306.03917（ICLR 2024 [待验证]）：微调 LLM 使其预测人类决策。
- **Centaur: a foundation model of human cognition** — Binz, Akata, Bethge, Brändle, E. Schulz 等, 2024, arXiv:2410.20268（*Nature* 2025 [待验证]）：在 Psych-101（160 项实验、6 万被试）上微调 Llama，预测人类行为超越经典认知模型——"机器心理学"与"心理学的机器模型"合流的标志。
- **Large language models as models of human cognition** — Michael C. Frank, 2023, PsyArXiv (DOI:10.31234/osf.io/wxt69)。

## 三、主要研究团队与机构

1. **Helmholtz Munich — Institute for Human-Centered AI（Eric Schulz、Marcel Binz、Julian Coda-Forno、Elif Akata）**：认知心理学范式 + LLM 的最高产团队（GPT-3 认知测验、CogBench、焦虑诱导、重复博弈、Centaur）。原属 MPI Biological Cybernetics（Tübingen）。
2. **斯图加特大学 Thilo Hagendorff（IRIS/Interchange Forum）**："Machine Psychology"纲领提出者；欺骗、直觉偏差、物种歧视等系列。
3. **斯坦福 GSB Michal Kosinski**：ToM in LLM 争议核心；计算心理测量学背景。
4. **哈佛 Tomer Ullman / Jennifer Hu（认知科学阵营的批评者）**：ToM 评估的稳健性与方法论批判。
5. **柏林 Charité / IIT 等欧洲联合团队（James Strachan、Cristina Becchio）**：*Nature Human Behaviour* 人机 ToM 全面对照。
6. **GESIS/曼海姆-康斯坦茨（Max Pellert、Beatrice Rammstedt、Markus Strohmaier）**："AI Psychometrics"心理测量学进路。
7. **Google DeepMind（Ishita Dasgupta、Stephanie Chan、Jane X. Wang、Murray Shanahan；及 Serapio-García 等人格团队）**：既产出实证也提供概念框架（role-play）。
8. **CUHK/JHU Jen-tse Huang 等**：PsychoBench、EmotionBench 等华人团队基准工作。
9. **MPI Human Development（Iyad Rahwan，柏林）**：machine behaviour 传统及人机道德行为实验（如 2025 *Nature* 的 AI 代理不诚实研究）。
10. **UCSD Bergen 实验室（Cameron Jones）**：图灵测试实证。
11. **北大 Haoran Ye 等**：LLM Psychometrics 系统综述（见下）。

## 四、方法论争议

### 4.1 心理测量工具对 LLM 的效度问题

- **Challenging the Validity of Personality Tests for Large Language Models** — Sühr, Dorner, Samadi, Kelava, 2023, arXiv:2311.05297：人类问卷的心理测量性质（因子结构、信度）不能自动迁移到 LLM，"施测问卷"结论多不成立。
- **Large Language Model Psychometrics: A Systematic Review of Evaluation, Validation, and Enhancement** — Haoran Ye, Jing Jin, Xin Zhang 等, 2025, arXiv:2505.08245：领域最全面的系统综述，梳理评估—验证—增强三条线及效度威胁。
- **A validity-guided workflow for robust large language model research in psychology** — Zhicheng Lin, 2025, arXiv:2507.04491：提出以效度为核心的研究流程规范。
- **Probing the psychology of AI models** — Shiffrin & Mitchell, 2023, *PNAS* (DOI:10.1073/pnas.2300963120)：经典评论——对 LLM 做心理学推断须警惕训练数据污染与拟人化解释。
- **Baby steps in evaluating the capacities of large language models** — Michael C. Frank, 2023, *Nature Reviews Psychology* (DOI:10.1038/s44159-023-00211-x)：主张借鉴发展心理学的严格控制（多题项、控制组、刺激变体）来评估 LLM。
- 数据污染/浅层启发式问题：Ullman 2023、Shapira 2023、Hodel & West 2023（见上）共同指向"Clever Hans"风险——高分可能来自训练集泄漏或表面线索。
- 提示敏感性：人格/态度测验结果对提示措辞、选项顺序高度敏感（多篇上述论文报告），威胁重测信度。

### 4.2 拟人化（anthropomorphism）批评

- **Talking about Large Language Models** — Shanahan, 2024, CACM：反对不加限定地使用信念/欲望词汇。
- **Role-Play with LLMs** — Shanahan 等, 2023：LLM"人格"是角色模拟的叠加态，问卷测到的是被扮演的角色。
- **Thinking beyond the anthropomorphic paradigm benefits LLM research** — Lujain Ibrahim, Myra Cheng, 2025, arXiv:2502.09192：系统论证拟人化概念框架（隐喻性套用人类构念）限制了 LLM 研究的假设空间。
- **Anthropomorphization of AI: Opportunities and Risks** — Deshpande, Rajpurohit, Narasimhan, Kalyan, 2023, arXiv:2305.14784。
- **Humanizing Machines: Rethinking LLM Anthropomorphism Through a Multi-Level Framework of Design** — Xiao, Ng, Liu, Diab, 2025, arXiv:2508.17573：把拟人化作为可设计、可分级的变量而非一概批判。
- 反方立场：Hagendorff（2023）主张"有节制的拟人化"是机器心理学的必要工作假设——用行为标准而非现象意识标准来谈论 LLM 的"能力"。

### 4.3 争议的整体格局

- **能力派**（Kosinski、Webb、Strachan、部分 Hagendorff 工作）：标准化测验高分 = 涌现出类人能力。
- **怀疑派**（Ullman、Shapira、Mitchell/Shiffrin、Hodel & West）：扰动脆弱性 + 数据污染 ⇒ 高分是 Clever Hans。
- **测量学派**（Pellert、Sühr、Ye、Lin）：争论的根源是效度未经检验；应先做 LLM 专用的心理测量验证再谈结论。
- **概念派**（Shanahan、Ibrahim & Cheng）：问题在语言与框架——应发展 LLM 原生的构念而非套用人类心理学词汇。

## 五、给 Howard 的入门路径建议

1. 纲领：Hagendorff 2023 (arXiv:2303.13988) + Rahwan 2019 *Nature*。
2. 系统综述：Ye 等 2025 (arXiv:2505.08245) —— 覆盖面最全的地图。
3. 实证范式样板：Binz & Schulz 2023 *PNAS*；CogBench (arXiv:2402.18225)；Strachan 2024 *NHB*。
4. 批判方法论：Ullman 2023、Sühr 2023、Frank 2023 *NRP*、Lin 2025。
5. 前沿方向：Centaur（arXiv:2410.20268，认知基础模型）、activation engineering 操控人格（arXiv:2412.10427）、ToM 与自我心智归因分离（arXiv:2603.28925, 2026）。
