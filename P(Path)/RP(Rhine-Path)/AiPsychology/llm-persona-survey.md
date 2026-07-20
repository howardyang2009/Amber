# LLM/AI Agent 人格、身份与个性化研究综述（2023–2026）

> 检索方式：arXiv API + Semantic Scholar，所有 arXiv 编号均经 API 逐一验证（除标注[待验证]者）。
> 背景：服务于"LLM底色 + 记忆 + 个性化skill"三层个体人格架构假设的文献调研。

---

## 一、LLM人格的诱导、测量与稳定性

### 概念基础
- **Role-Play with Large Language Models** — Murray Shanahan, Kyle McDonell, Laria Reynolds. 2023. arXiv:2305.16367（Nature 版）。核心发现：主张把LLM看作"角色扮演者/角色叠加态"而非有固定自我的实体——LLM维持的是角色的分布（multiverse of characters），这是理解"LLM人格"的基础概念框架。
- **Large Language Models are Superpositions of All Characters** — Keming Lu, Bowen Yu, Chang Zhou 等. 2024. arXiv:2401.12474。核心发现：LLM内在是"所有角色的叠加"，提出Ditto自对齐方法，无需蒸馏即可从模型自身激发出任意角色扮演能力。
- **Machine Psychology** — Thilo Hagendorff, Ishita Dasgupta, Marcel Binz 等. 2023. arXiv:2303.13988。核心发现：提出"机器心理学"研究纲领——用心理学实验范式（而非传统NLP基准）系统研究LLM的行为模式。

### 人格测量与诱导
- **Personality Traits in Large Language Models** — Greg Serapio-García, Mustafa Safdari, Clément Crepy 等（Google/DeepMind）. 2023. arXiv:2307.00184。核心发现：大模型输出中的人格测量在特定条件下具备信效度，且可通过prompt沿大五维度可控地塑造人格。
- **Evaluating and Inducing Personality in Pre-trained Language Models** — Guangyuan Jiang, Manjie Xu, Song-Chun Zhu 等. 2022/2023, NeurIPS 2023 (spotlight). arXiv:2206.07550。核心发现：提出Machine Personality Inventory（MPI）系统评测LLM人格，并提出P²诱导方法定向诱导指定大五人格。
- **PersonaLLM: Investigating the Ability of LLMs to Express Personality Traits** — Hang Jiang, Xiajie Zhang 等. 2023, NAACL 2024 Findings. arXiv:2305.02547。核心发现：被赋予大五人格设定的GPT-3.5/4在问卷和写作中能一致地表达对应人格，且人类评审能部分识别。
- **Better Zero-Shot Reasoning with Role-Play Prompting** — Aobo Kong, Shiwan Zhao 等. 2023, NAACL 2024. arXiv:2308.07702。核心发现：角色扮演prompt不只是风格装饰——能实质提升推理性能，说明persona会改变模型的能力剖面。
- **Quantifying the Persona Effect in LLM Simulations** — Tiancheng Hu, Nigel Collier. 2024, ACL 2024. arXiv:2402.10811。核心发现：persona变量对多数主观NLP任务标注差异的解释力其实有限（<10%），给"persona prompt万能论"泼冷水。
- **Persona Vectors: Monitoring and Controlling Character Traits in Language Models** — Runjin Chen, Andy Arditi 等（Anthropic）. 2025. arXiv:2507.21509。核心发现：在激活空间中找到"人格向量"（如谄媚、邪恶、幻觉倾向），可监测、预测并通过steering干预人格漂移——把人格从prompt层面拉到了表征层面。
- **Psychometric Personality Shaping Modulates Capabilities and Safety in Language Models** — Stephen Fitz, P. Romero 等. 2025. arXiv:2509.16332。核心发现：沿心理测量维度塑造人格会系统性改变模型的能力与安全表现，人格设定即是能力/安全的调节旋钮。

### 测量的可靠性与稳定性（批判性工作）
- **Self-Assessment Tests are Unreliable Measures of LLM Personality** — Akshat Gupta, Xiaoyang Song, Gopala Anumanchipalli. 2023. arXiv:2309.08163。核心发现：LLM人格自评问卷结果对选项顺序、措辞等极度敏感，自评量表不可靠。
- **Challenging the Validity of Personality Tests for Large Language Models** — Tom Sühr, Florian E. Dorner, Samira Samadi 等. 2023. arXiv:2311.05297。核心发现：人类人格量表直接搬到LLM上缺乏心理测量学效度，LLM的作答结构不满足人类量表的假设。
- **Persistent Instability in LLM's Personality Measurements** — Tommaso Tosato 等. 2025, AAAI 2026. arXiv:2508.04826。核心发现：模型规模、推理模式、对话历史都会导致人格测量持续不稳定——"LLM有无稳定人格"本身仍是未解问题。
- **InCharacter: Evaluating Personality Fidelity in Role-Playing Agents through Psychological Interviews** — Xintao Wang, Yunze Xiao, Jen-tse Huang 等. 2023, ACL 2024. arXiv:2310.17976。核心发现：用"心理访谈"而非自评量表评估角色扮演agent的人格保真度，更接近真实人格测评。
- **CAPE: Context-Aware Personality Evaluation Framework for LLMs** — Jivnesh Sandhan 等. 2025, EMNLP。arXiv:2508.20385。核心发现：引入对话历史的情境化人格评估，发现上下文会显著改变LLM的人格测量结果。
- **Quantifying Data Contamination in Psychometric Evaluations of LLMs** — Jongwook Han 等. 2025, EACL. arXiv:2510.07175。核心发现：人格量表本身在预训练数据中的污染会扭曲LLM心理测评结果。

### 角色扮演系统与基准
- **RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of LLMs** — Zekun Moore Wang 等. 2023, ACL 2024 Findings. arXiv:2310.00746。核心发现：构建100角色的RoleBench基准，提出RoleGPT/RoCIT系统提升与评测角色扮演能力。
- **Character-LLM: A Trainable Agent for Role-Playing** — Yunfan Shao, Linyang Li 等. 2023, EMNLP 2023. arXiv:2310.10158。核心发现：用"经历重建+经验上传"训练专属角色模型（如贝多芬、克利奥帕特拉），让角色成为参数而非prompt。
- **ChatHaruhi: Reviving Anime Character in Reality via LLM** — Cheng Li, Ziang Leng 等. 2023. arXiv:2308.09597。核心发现：记忆库+台本检索复现动漫角色，早期开源角色扮演系统代表。
- **PersonaGym: Evaluating Persona Agents and LLMs** — Vinay Samuel 等. 2024. arXiv:2407.18416。核心发现：首个动态persona agent评测框架，发现更强的通用模型未必是更好的persona agent。
- **Thinking in Character: Advancing Role-Playing Agents with Role-Aware Reasoning** — Yihong Tang 等. 2025. arXiv:2506.01748。核心发现：给角色扮演agent加入"角色感知推理"，让推理过程本身贴合角色身份以提升一致性。
- **Two Tales of Persona in LLMs: A Survey of Role-Playing and Personalization** — Yu-Min Tseng 等. 2024, EMNLP Findings. arXiv:2406.01171。核心发现：统一梳理persona的两种用法——"LLM扮演角色"（role-playing）与"LLM适配用户"（personalization），正对应Howard关心的两条线。

## 二、记忆增强Agent与长期身份连续性

- **Generative Agents: Interactive Simulacra of Human Behavior**（斯坦福Smallville）— Joon Sung Park, Joseph C. O'Brien, Carrie J. Cai, M. Bernstein 等. 2023, UIST 2023. arXiv:2304.03442。核心发现：记忆流（memory stream）+ 反思（reflection）+ 规划架构让25个agent在沙盒小镇中涌现出可信的、有连续性的个体行为——"记忆造就身份"的奠基性实证。
- **LLM Agents Grounded in Self-Reports Enable General-Purpose Simulation of Individuals**（"1000人模拟"论文，原题 Generative Agent Simulations of 1,000 People）— Joon Sung Park, Carolyn Q. Zou 等. 2024. arXiv:2411.10109。核心发现：用2小时深度访谈资料构建的agent能以85%的自一致性复现真人在社会科学问卷上的作答——个体访谈记忆足以支撑高保真"数字个体"。
- **MemGPT: Towards LLMs as Operating Systems** — Charles Packer, Sarah Wooders, Kevin Lin 等（后发展为Letta）. 2023. arXiv:2310.08560。核心发现：借鉴操作系统虚拟内存思想做分层记忆管理（主上下文/外部存储+自主分页），使agent能跨越上下文窗口维持长期一致的对话身份。
- **MemoryBank: Enhancing LLMs with Long-Term Memory** — Wanjun Zhong 等. 2023, AAAI 2024. arXiv:2305.10250。核心发现：引入艾宾浩斯遗忘曲线式的记忆更新机制，让陪伴型agent（SiliconFriend）随交互演化对用户的理解与自身人格。
- **A Survey on the Memory Mechanism of LLM-based Agents** — Zeyu Zhang 等. 2024. arXiv:2404.13501。核心发现：系统综述agent记忆的获取、管理与利用机制，是该子领域的地图型文献。
- **Position: Episodic Memory is the Missing Piece for Long-Term LLM Agents** — Mathis Pink, Qinyuan Wu 等. 2025. arXiv:2502.06975。核心发现：立场论文——主张情景记忆（episodic memory）是长期agent实现连续自我的关键缺失组件，直接呼应"记忆→身份连续性"命题。
- **A-MEM: Agentic Memory for LLM Agents** — Wujiang Xu 等. 2025. arXiv:2502.12110。核心发现：借鉴Zettelkasten卡片盒方法，让agent自主组织、链接、演化自己的记忆网络。
- **Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory** — Prateek Chhikara 等. 2025. arXiv:2504.19413。核心发现：可扩展的生产级记忆抽取-更新流水线，在长对话一致性上显著优于全上下文基线且成本更低。
- **MemOS: An Operating System for Memory-Augmented Generation in LLMs** — Zhiyu Li 等. 2025. arXiv:2505.22101。核心发现：把记忆提升为一等系统资源（MemCube），统一管理参数记忆、激活记忆与外部记忆。
- **LongMemEval: Benchmarking Chat Assistants on Long-Term Interactive Memory** — Di Wu 等. 2024, ICLR 2025. arXiv:2410.10813。核心发现：五类长期记忆能力基准；现有商用助手在持续交互中记忆准确率下降30%+，长期一致性远未解决。

## 三、个性化对齐与个体偏好建模

- **A Roadmap to Pluralistic Alignment** — Taylor Sorensen, Jared Moore 等. 2024, ICML 2024. arXiv:2402.05070。核心发现：提出多元对齐分类学（Overton/可操纵/分布式多元），指出RLHF会压缩偏好多样性——个性化对齐领域的纲领性论文。
- **Personalized Soups: Personalized LLM Alignment via Post-hoc Parameter Merging** — Joel Jang, Seungone Kim 等. 2023. arXiv:2310.11564。核心发现：把个性化RLHF分解为多目标RL后做参数合并，按用户偏好组合"模型汤"实现个体化对齐。
- **Personalized Language Modeling from Personalized Human Feedback** — Xinyu Li 等. 2024. arXiv:2402.05133。核心发现：P-RLHF框架——同时学习用户嵌入模型与语言模型，从个体反馈中直接学个体偏好。
- **MaxMin-RLHF: Alignment with Diverse Human Preferences** — Souradip Chakraborty 等. 2024, ICML 2024. arXiv:2402.08925。核心发现：证明单一奖励模型无法表征多样化人类偏好（不可能性结果），提出偏好混合的max-min对齐。
- **Group Preference Optimization: Few-Shot Alignment of LLMs** — Siyan Zhao, John Dang, Aditya Grover. 2023, ICLR 2024. arXiv:2310.11523。核心发现：用少样本in-context元学习让模型快速对齐到特定群体的偏好分布。
- **Democratizing LLMs via Personalized Parameter-Efficient Fine-tuning** — Zhaoxuan Tan 等. 2024, EMNLP 2024. arXiv:2402.04401。核心发现：OPPU——每个用户一个私有PEFT模块，把用户行为模式和偏好存进个人参数，优于检索式个性化。
- **Personality Alignment of Large Language Models** — Minjun Zhu, Yixuan Weng 等. 2024, ICLR 2025. arXiv:2408.11779。核心发现：提出PAPI大规模数据集（30万+人的人格量表数据）与激活干预方法PAS，让模型高效对齐到特定个体的人格与偏好。
- **Beyond Demographics: Aligning Role-playing LLM-based Agents Using Human Belief Networks** — Yun-Shiuan Chuang 等. 2024, EMNLP Findings. arXiv:2406.17232。核心发现：仅靠人口学信息扮演个体效果差；注入个体"信念网络"（一个话题的立场可泛化到关联话题）能显著提升个体模拟对齐度。

## 四、Skill/工具库塑造agent行为模式

（该方向直接研究"skill库→人格"的文献很少，以下是最接近的技能积累/自我演化工作）

- **Voyager: An Open-Ended Embodied Agent with LLMs** — Guanzhi Wang, Yuqi Xie 等. 2023. arXiv:2305.16291。核心发现：首个终身学习Minecraft agent，核心是不断增长的可执行代码技能库——技能库即agent的"程序性记忆"，决定其行为能力边界与风格。
- **SkillWeaver: Web Agents can Self-Improve by Discovering and Honing Skills** — Boyuan Zheng 等. 2025. arXiv:2504.07079。核心发现：web agent自主发现、练习并沉淀技能为API，技能库可迁移给弱agent使其显著变强——技能作为可传递的行为模式载体。
- **A Survey of Self-Evolving Agents** — Huan-ang Gao 等. 2025. arXiv:2507.21046。核心发现：综述agent在模型、记忆、工具/技能、架构四个层面的自我演化——把"记忆+技能塑造agent"纳入统一框架。
- 注：直接以"技能库如何塑造agent人格/个性"为题的实证研究目前基本空白，这是Howard三层架构假设中最缺文献支撑、也最有原创空间的一环。

## 五、对Howard三层架构的启示（简评）

1. **底色层有据**：Shanahan的"角色叠加态"+ Anthropic的persona vectors表明基座模型确有可测量、可干预的"人格底色"，但心理测量学批判线（Gupta/Sühr/Tosato）提示该底色不稳定、对情境敏感。
2. **记忆层证据最强**：Generative Agents与"1000人模拟"证明记忆（尤其访谈式深度记忆+反思机制）足以支撑高保真个体身份；episodic memory立场论文明确把情景记忆定位为长期自我连续性的关键。
3. **个性化层工具成熟**：从参数合并（Personalized Soups）、个人PEFT（OPPU）到激活干预（PAS），"一人一模型/一向量"的技术路径已铺开。
4. **skill层是空白**：技能库对agent行为风格的塑造有工程实践（Voyager/SkillWeaver）但无人格心理学视角的研究——可作为原创切入点。
