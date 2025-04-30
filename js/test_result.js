document.addEventListener("DOMContentLoaded", function () {
  const correctRate = localStorage.getItem('correctRate');
  const score = localStorage.getItem('score');
  const totalQuestions = localStorage.getItem('totalQuestions');
  const answers = JSON.parse(localStorage.getItem('answers'));
  const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers'));

  // Display correct rate
  document.getElementById('correctRate').textContent = `${correctRate}% (${score}/${totalQuestions})`;

  const questions = [
    {
      question: '1. 国家秘密是关系国家安全和利益，（ ），在一定时间内只限一定范围的人员知悉的事项。',
      options: ['A. 根据实际需要确定', 'B. 依照法定程序确定', 'C. 按照领导的意图确定'],
      userAnswer: answers.question1,
      correctAnswer: correctAnswers.question1
    },
    {
      question: '2. 一切国家机关、武装力量、政党、社会团体、 （ ）都有保守国家秘密的义务。',
      options: ['A. 国家公务员', 'B. 共产党员', 'C. 企业事业单位和公民'],
      userAnswer: answers.question2,
      correctAnswer: correctAnswers.question2
    },
    {
      question: '3. 保守国家秘密的工作实行积极防范、突出重点、依法管理的方针， （ ）。',
      options: [
        'A. 确保国家秘密安全',
        'B. 便利各项工作的开展',
        'C. 既确保国家秘密安全又便利信息资源合理利用'
      ],
      userAnswer: answers.question3,
      correctAnswer: correctAnswers.question3
    },
    {
      question: '4. 机关、单位对所产生的国家秘密事项，应当按照（ ）确定密级，同时确定保密期限和知悉范围。',
      options: [
        'A. 保密法实施办法',
        'B. 保密规章制度',
        'C. 国家秘密及其密级的具体范围的规定'
      ],
      userAnswer: answers.question4,
      correctAnswer: correctAnswers.question4
    },
    {
      question: '5. 一份文件为机密级，保密期限是10年，应当标注为（ ）。',
      options: ['A. 机密10年', 'B. 机密★', 'C. 机密★10年'],
      userAnswer: answers.question5,
      correctAnswer: correctAnswers.question5
    },
    {
      question: '6. 某文件标注"绝密★"，表示该文件保密期限为（ ）。',
      options: ['A. 30年', 'B. 20年', 'C. 长期'],
      userAnswer: answers.question6,
      correctAnswer: correctAnswers.question6
    },
    {
      question: '7. 对于机密级涉密计算机，以下口令能够满足复杂度要求的是（ ）。',
      options: ['A. ~!@#$%^&*()', 'B. LJ19811003', 'C. 885811880088', 'D. HJUY&uf89!de'],
      userAnswer: answers.question7,
      correctAnswer: correctAnswers.question7
    },
    {
      question: '8. 秘密级计算机，身份鉴别口令的更新周期为（ ）。',
      options: ['A. 3天', 'B. 7天', 'C. 30天', 'D. 60天'],
      userAnswer: answers.question8,
      correctAnswer: correctAnswers.question8
    },
    {
      question: '9. 处理涉密信息的多功能一体机（ ）普通电话线路连接。连接后，（ ）将涉密信息传输到公共通信网络上，或被境外情报机构远程控制。',
      options: [
        'A. 不能与 不会',
        'B. 可以与 会',
        'C. 不能与 可能',
        'D. 可以与 不会'
      ],
      userAnswer: answers.question9,
      correctAnswer: correctAnswers.question9
    },
    {
      question: '10. 涉密信息系统的规划、设计、建设、维护应当按照（ ）要求进行，选择具有（ ）的单位承担。',
      options: [
        'A. 国家保密规定和标准 信息系统建设资质',
        'B. 国家保密规定和标准 涉密信息系统集成资质',
        'C. 信息安全等级保护标准 信息系统建设资质',
        'D. 信息安全等级保护标准 涉密信息系统集成资质'
      ],
      userAnswer: answers.question10,
      correctAnswer: correctAnswers.question10
    },
    {
      question: '11. 对计算机硬盘、U盘等存储部件进行数据删除或格式化处理，只是对（）进行了删除操作，对于（）并没有做任何处理，可通过专业工具直接恢复被删除或格式化的信息。因此，不得将未经专业销密的涉密计算机等办公自动化设备随意淘汰处理。',
      options: [
        'A. 数据区信息 文件分配表信息',
        'B. 文件分配表信息 数据区信息',
        'C. 注册表信息 文件分配表信息',
        'D. 数据区信息 注册表信息'
      ],
      userAnswer: answers.question11,
      correctAnswer: correctAnswers.question11
    },
    {
      question: '12. 某商业银行支行原行长李某因工作调动，按要求对文件、资料进行清理，李某应该（ ）。',
      options: [
        'A. 只将"红头文件"整理归档即可',
        'B. 将个人使用和管理的涉密载体全部清理，退还原工作单位',
        'C. 整理后的各类资料可以与报纸一起出售',
        'D. 将个人使用和管理的各类载体全部清理，退还原工作单位'
      ],
      userAnswer: answers.question12,
      correctAnswer: correctAnswers.question12
    },
    {
      question: '13. 涉密计算机改作非涉密计算机使用，应当经过机关、单位批准，并采取（ ）的安全技术处理措施。',
      options: ['A. 拆除信息存储部件', 'B. 删除涉密文件', 'C. 格式化硬盘', 'D. 硬盘分区'],
      userAnswer: answers.question13,
      correctAnswer: correctAnswers.question13
    },
    {
      question: '14.（ ）可真正保障涉密计算机及信息系统不受来自公共信息网络的黑客攻击，同时也可为涉密计算机及信息系统划定了明确的安全边界。',
      options: ['A. 隔离卡', 'B. 安全保密防护设备', 'C. 安全保密防护软件', 'D. 物理隔离'],
      userAnswer: answers.question14,
      correctAnswer: correctAnswers.question14
    },
    {
      question: '15. 涉密计算机可以使用（ ）。',
      options: ['A. 无线网卡', 'B. 无线键盘', 'C. 打印机', 'D. 蓝牙传输器'],
      userAnswer: answers.question15,
      correctAnswer: correctAnswers.question15
    },
    {
      question: '16. 机关、单位应建立健全互联网信息发布保密审查制度，制定机构和人员负责拟在互联网发布信息的保密审查，并建立（ ）。审查应坚持（ ）、全面审查，并综合分析信息关联性，防止因数据汇聚涉及国家秘密。',
      options: [
        'A. 审查记录档案 一事一审',
        'B. 信息发布档案 集中审查',
        'C. 审查记录档案 一周二审',
        'D. 信息发布档案 一月一审'
      ],
      userAnswer: answers.question16,
      correctAnswer: correctAnswers.question16
    },
    {
      question: '17. 涉密人员不得在手机中存储（ ）的工作单位、职务等敏感信息，不得启用手机的远程数据同步功能。',
      options: ['A. 一般涉密人员', 'B. 重要涉密人员', 'C. 核心涉密人员', 'D. 各级涉密人员'],
      userAnswer: answers.question17,
      correctAnswer: correctAnswers.question17
    },
    {
      question: '18. 普通电话、专网电话、公网电话等与公共信息网络连接，其通信内容可通过串音、搭线或电磁辐射进行窃听。铺设保密电话线路时，应与普通电话、专网电话、公网电话线路（ ），可以避免（ ）泄密。',
      options: [
        'A. 不靠近、不平行 串音',
        'B. 不靠近、不平行 搭线',
        'C. 平行铺设 串音',
        'D. 不靠近、不平行 电磁辐射'
      ],
      userAnswer: answers.question18,
      correctAnswer: correctAnswers.question18
    },
    {
      question: '19. 传真涉密信息，必须使用（ ）批准使用的加密传真机，只能传输（ ）信息，绝密级信息应送当地机要部门译发。',
      options: [
        'A. 保密行政管理部门 秘密级',
        'B. 国家密码管理部门 秘密级',
        'C. 保密行政管理部门 机密级和秘密级',
        'D. 国家密码管理部门 机密级和秘密级'
      ],
      userAnswer: answers.question19,
      correctAnswer: correctAnswers.question19
    },
    {
      question: '20. 中央国家机关下属单位和省级以下机关、单位确定保密要害部门部位，应报（ ）审核确认。',
      options: [
        'A. 国家保密行政管理部门',
        'B. 中央国家机关保密工作机构或省级保密行政管理部门',
        'C. 国家保密行政管理部门或中央国家机关保密工作机构',
        'D. 中央国家机关保密工作机构'
      ],
      userAnswer: answers.question20,
      correctAnswer: correctAnswers.question20
    },
    {
      question: '21. 国家秘密的密级分为 ( ) 。',
      options: ['A. 绝密、机密、秘密三级', 'B. 绝密和机密两级', 'C. 秘密和机密两级'],
      userAnswer: answers.question21,
      correctAnswer: correctAnswers.question21
    },
    {
      question: '22. （）以上地方各级保密行政管理部门在其职权范围内，主管本行政区域保守国家秘密的工作。',
      options: ['A. 省级', 'B. 市级', 'C. 县级'],
      userAnswer: answers.question22,
      correctAnswer: correctAnswers.question22
    },
    {
      question: '23. 国家秘密及其密级的具体范围，应当在（ ）公布。',
      options: ['A. 社会范围内', 'B. 有关范围内', 'C. 机关、企事业范围内'],
      userAnswer: answers.question23,
      correctAnswer: correctAnswers.question23
    },
    {
      question: '24. 对某一事项是否属于国家秘密和属于何种密级有争议的，由国家保密工作部门或者省、自治区、（ ）的保密工作部门确定。',
      options: ['A. 地市', 'B. 县（区）', 'C. 直辖市'],
      userAnswer: answers.question24,
      correctAnswer: correctAnswers.question24
    },
    {
      question: '25. 国家秘密事项的保密期限需要延长的，由 ( ) 决定',
      options: [
        'A. 原确定密级的保密期限的机关、单位决定',
        'B. 原确定密级的保密期限的机关、单位的上级机关决定',
        'C. 原确定密级和保密期限的机关、单位或者其上级机关决定'
      ],
      userAnswer: answers.question25,
      correctAnswer: correctAnswers.question25
    },
    {
      question: '26. 对于国家秘密保密期限已满而未收到原定密机关、单位延长保密期限通知的，该项国家秘密可以（ ）解密。',
      options: ['A. 自行', 'B. 由上级机关', 'C. 由保密工作部门'],
      userAnswer: answers.question26,
      correctAnswer: correctAnswers.question26
    },
    {
      question: '27. 违反《中华人民共和国保守国家秘密法》的规定，过失泄露国家秘密，情节严重的，应当( ) 。',
      options: ['A. 追究刑事责任', 'B. 进行批评教育', 'C. 给予党纪、政纪处分'],
      userAnswer: answers.question27,
      correctAnswer: correctAnswers.question27
    },
    {
      question: '28. 国家秘密的保密期限，除有特殊规定外， ( ) 。',
      options: [
        'A. 绝密级事项不超过二十年，机密级事项不超过十年，秘密级事项不超过五年',
        'B. 绝密级事项不超过十年，机密级事项不超过五年，秘密级事项不超过一年',
        'C. 绝密级事项不超过三十年，机密级事项不超过二十年，秘密级事项不超过十年'
      ],
      userAnswer: answers.question28,
      correctAnswer: correctAnswers.question28
    },
    {
      question: '29. 为境外的机构、组织、人员窃取、刺探、收买、非法提供国家秘密的，依法追究（ ）。',
      options: ['A. 行政责任', 'B. 刑事责任', 'C. 经济损失'],
      userAnswer: answers.question29,
      correctAnswer: correctAnswers.question29
    },
    {
      question: '30. 涉密人员出境，应当经过（ ）的批准。',
      options: ['A. 公安机关', 'B. 保密工作部门', 'C. 批准、任用涉密人员的主管部门'],
      userAnswer: answers.question30,
      correctAnswer: correctAnswers.question30
    },
    {
      question: '31. 绝密级国家秘密，（ ）才能接触。',
      options: ['A. 经过批准的人员', 'B. 省、军级以上人员', 'C. 机关工作人员'],
      userAnswer: answers.question31,
      correctAnswer: correctAnswers.question31
    },
    {
      question: '32. 对外交往与合作中需要提供国家秘密事项的，应当按照（ ）提供。',
      options: ['A. 合同规定', 'B. 规定的程序事先经过批准后', 'C. 协议'],
      userAnswer: answers.question32,
      correctAnswer: correctAnswers.question32
    },
    {
      question: '33. 根据《保密法》和《保密法实施条例》，（ ）主管全国的保密工作。',
      options: ['A. 国家保密工作机构', 'B. 国家保密局', 'C. 国务院'],
      userAnswer: answers.question33,
      correctAnswer: correctAnswers.question33
    },
    {
      question: '34. 下列哪一事项不应当确定为国家秘密（ ）。',
      options: [
        'A. 国务院总理视察工作的行程安排',
        'B. 省长视察工作的行程安排',
        'C. 国家主席出访活动安排'
      ],
      userAnswer: answers.question34,
      correctAnswer: correctAnswers.question34
    },
    {
      question: '35. 共产党员丢失秘密文件资料或者泄露党和国家秘密,情节严重的,给予( )处分。',
      options: ['A. 撤销党内职务', 'B. 严重警告', 'C. 开除党籍', 'D. 留党察看'],
      userAnswer: answers.question35,
      correctAnswer: correctAnswers.question35
    },
    {
      question: '36. 秘密载体经管人员离岗、离职前，应当将所保管的秘密载体（ ）。',
      options: [
        'A. 全部清退并办理移交手续',
        'B. 部分清退并办理移交手续',
        'C. 全部清退可以不办理移交手续'
      ],
      userAnswer: answers.question36,
      correctAnswer: correctAnswers.question36
    },
    {
      question: '37. 各机关、单位对所产生的国家秘密事项，应当依照保密范围的规定及时确定密级，最迟不得超过 () 。',
      options: ['A. 10日', 'B. 20日', 'C. 30日'],
      userAnswer: answers.question37,
      correctAnswer: correctAnswers.question37
    },
    {
      question: '38. 传递秘密载体，应当包装密封；传递秘密载体的信封或者袋牌上应当标明 ( ) 。',
      options: ['A. 密级', 'B. 密级和编号', 'C. 密级、编号和收发件单位名称'],
      userAnswer: answers.question38,
      correctAnswer: correctAnswers.question38
    },
    {
      question: '39. 某机关工作人员因工作需要携带秘密载体外出，其下述做法中正确的是 ( ) 。',
      options: [
        'A. 采取保护措施，使秘密载体始终处于自己的有效控制之下',
        'B. 报经本机关主管领导批准后，独自携带绝密级文件外出',
        'C. 报经本机关主管领导批准后，二人共同携带绝密级文件外出参加涉外活动'
      ],
      userAnswer: answers.question39,
      correctAnswer: correctAnswers.question39
    },
    {
      question: '40. 绝密级国家秘密技术在保密期限内（ ）申请专利或者保密专利。',
      options: ['A. 可以', 'B. 不得', 'C. 暂缓'],
      userAnswer: answers.question40,
      correctAnswer: correctAnswers.question40
    },
    {
      question: '41. 机关、单位及其工作人员履行保密工作责任制情况应当纳入年度考评和考核内容。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question41,
      correctAnswer: correctAnswers.question41
    },
    {
      question: '42. 企业事业单位及其工作人员协助机关、单位逃避、妨碍保密检查或者泄露保密检查或者泄露国家秘密案件查处的，由有关主管部门依法予以处罚。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question42,
      correctAnswer: correctAnswers.question42
    },
    {
      question: '43. 对本机关产生的仍在保密期限内的国家秘密文件、资料，如果认为符合提前解密条件的，可以不需要办理解密手续，直接删去密级标志后就予以公开。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question43,
      correctAnswer: correctAnswers.question43
    },
    {
      question: '44. 连接互联网的计算机必须与处理涉密信息的计算机严格区分，做到专机专用，不得既用于上互联网又用于处理国家秘密信息。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question44,
      correctAnswer: correctAnswers.question44
    },
    {
      question: '45. 涉密人员可以私自到境外机构、组织或者外商独资企业工作，为其提供服务。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question45,
      correctAnswer: correctAnswers.question45
    },
    {
      question: '46. 涉密人员被解聘或者本人提出辞职的，应先调离涉密岗位，在本单位履行脱密期后再行办理解聘、辞职或调离手续。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question46,
      correctAnswer: correctAnswers.question46
    },
    {
      question: '47. 国家秘密载体以及属于国家秘密的设备、产品的明显部位应当标注国家秘密标志。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question47,
      correctAnswer: correctAnswers.question47
    },
    {
      question: '48. 复制国家秘密载体或者摘录、引用、汇编属于国家秘密的内容，应当按照规定报批，不得擅自改变原件的密级、保密期限和知悉范围，复制件应当加盖复制机关、单位戳记，并视同原件进行管理。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question48,
      correctAnswer: correctAnswers.question48
    },
    {
      question: '49. 机关单位制作本单位保密承诺书，可以结合实际补充相关内容，也可以适当删减规定的基本内容。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question49,
      correctAnswer: correctAnswers.question49
    },
    {
      question: '50. 中央国家机关、省级机关及其授权的机关、单位可能确定绝密级、机密级和秘密级国家秘密；设区的市、自治州一级的机关及其授权的机关、单位可以确定绝密级和秘密级国家秘密。',
      options: ['A. 正确', 'B. 错误'],
      userAnswer: answers.question50,
      correctAnswer: correctAnswers.question50
    }
  ];

  const questionResults = document.getElementById('questionResults');

  questions.forEach((item, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question-result');
    const questionTitle = document.createElement('p');
    questionTitle.textContent = item.question;
    const optionsList = document.createElement('div');
    optionsList.classList.add('options-list');

    item.options.forEach((option, i) => {
      const optionLabel = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `question${index + 1}`;
      input.disabled = true;
      input.checked = (item.userAnswer === option);
      const checkmark = document.createElement('span');
      checkmark.classList.add('checkmark');

      optionLabel.classList.add('option');

      console.log("answer:")
      console.log(item.userAnswer)
      console.log("correctAnswer:")
      console.log(item.correctAnswer)
      console.log("option:")
      console.log(option)
      
      if (item.userAnswer === option[0] && item.userAnswer === item.correctAnswer) {
        optionLabel.style.backgroundColor = 'rgb(156, 255, 89)';
        checkmark.style.backgroundColor = 'white';
      } else if (item.userAnswer === option[0] && item.userAnswer !== item.correctAnswer) {
        optionLabel.style.backgroundColor = 'rgb(255, 155, 155)';
        checkmark.style.backgroundColor = 'red';
      } else if (item.correctAnswer === option[0]) {
        optionLabel.style.backgroundColor = 'rgb(156, 255, 89)';
      }

      optionLabel.append(input, checkmark, option);
      optionsList.appendChild(optionLabel);
    });

    questionElement.append(questionTitle, optionsList);
    questionResults.appendChild(questionElement);
  });
});
