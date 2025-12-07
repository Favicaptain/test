// --- 50 Questions Data ---
const ALL_QUESTIONS = [
    {
        question: "1. What is Curriculum Delivery described as, according to the materials?",
        options: ["The process of designing the content and objectives.", "The implementation phase of the curriculum where planned content and objectives are put into action.", "The stage where learning outcomes are measured without instruction.", "The process of developing new educational policies."],
        answer: "The implementation phase of the curriculum where planned content and objectives are put into action."
    },
    {
        question: "2. Curriculum delivery is the bridge between which two phases of the curriculum process?",
        options: ["Instructional preparation and teaching/learning.", "Curriculum design and curriculum evaluation.", "Planning and continuous improvement.", "Assessment and feedback systems."],
        answer: "Curriculum design and curriculum evaluation."
    },
    {
        question: "3. Which of the following is an example of a technique that may be used in curriculum delivery to ensure learning actually happens for an objective like 'understanding photosynthesis'?",
        options: ["Drafting the learning objective.", "Finalizing the course textbook.", "A lab practical showing how light affects photosynthesis.", "Securing funding for the science department."],
        answer: "A lab practical showing how light affects photosynthesis."
    },
    {
        question: "4. Which type of assessment involves continuous evaluations like quizzes and class tests to monitor ongoing learning progress?",
        options: ["Summative Assessment", "Formative Assessment", "Practical Evaluation", "Diagnostic Assessment"],
        answer: "Formative Assessment"
    },
    {
        question: "5. Which key element integrates content, methods, resources, activities, assessment, teacher competence, and conducive learning environment?",
        options: ["Teacher support systems", "Curriculum Interpretation", "Key Elements (of delivery)", "Assessment and evaluation techniques"],
        answer: "Key Elements (of delivery)"
    },
    {
        question: "6. Which teaching method is primarily teacher-centered, involving one-way communication to efficiently deliver a large amount of information?",
        options: ["Lecture", "Class Discussion", "Problem-Solving", "Cooperative Learning"],
        answer: "Lecture"
    },
    {
        question: "7. The Class Discussion method is most appropriate for developing which skills?",
        options: ["Efficiently delivering a large amount of information.", "Modeling practical skills and procedures.", "Critical thinking and communication skills.", "Achieving mastery and proficiency at a self-paced level."],
        answer: "Critical thinking and communication skills."
    },
    {
        question: "8. In the Problem-Solving method, what is the student's typical role?",
        options: ["Passive Listener", "Expert, Narrator", "Solver and Investigator", "Coach, Critiquer"],
        answer: "Solver and Investigator"
    },
    {
        question: "9. Which stage of curriculum delivery involves analyzing curriculum documents and planning lessons aligned with intended learning outcomes?",
        options: ["Assessment", "Feedback Systems", "Curriculum Interpretation/Planning", "Teaching and Learning"],
        answer: "Curriculum Interpretation/Planning"
    },
    {
        question: "10. Effective curriculum delivery depends on all of the following EXCEPT:",
        options: ["Teacher competence.", "Conducive learning environment.", "Appropriate strategies and resources.", "Low learner motivation."],
        answer: "Low learner motivation."
    },
    {
        question: "11. What does Summative Assessment measure in the context of curriculum delivery?",
        options: ["Ongoing learning progress through quizzes.", "Cumulative learning achievements across the curriculum, typically through end-term exams.", "Practical skills application in real contexts.", "Stakeholder input for pedagogical improvements."],
        answer: "Cumulative learning achievements across the curriculum, typically through end-term exams."
    },
    {
        question: "12. The Demonstration teaching method often follows which popular teaching model?",
        options: ["\"We do\" model.", "\"I do\" model (Teacher shows how).", "\"They learn\" model.", "\"Self-paced\" model."],
        answer: "\"I do\" model (Teacher shows how)."
    },
    {
        question: "13. The NUC benchmark curriculum for Biology Education transforming into classroom experiences exemplifies which concept?",
        options: ["Curriculum Design", "Curriculum Delivery", "Curriculum Evaluation", "Curriculum Policy"],
        answer: "Curriculum Delivery"
    },
    {
        question: "14. What is the primary focus of Curriculum Delivery?",
        options: ["Ensuring funding is available.", "Ensuring learning actually happens, not just that content is covered.", "Ensuring all textbooks are distributed.", "Ensuring administrative tasks are completed."],
        answer: "Ensuring learning actually happens, not just that content is covered."
    },
    {
        question: "15. The process of designing the content and objectives falls under:",
        options: ["Curriculum Evaluation", "Curriculum Delivery", "Curriculum Design", "Instructional Preparation"],
        answer: "Curriculum Design"
    },
    {
        question: "16. What is the role of Instructional Preparation in the delivery process?",
        options: ["Assessing student performance.", "Organizing materials, creating timetables, and designing engaging activities.", "Collecting stakeholder feedback.", "Writing new curriculum documents."],
        answer: "Organizing materials, creating timetables, and designing engaging activities."
    },
    {
        question: "17. What is the final stage of the curriculum delivery process mentioned in the lecture note?",
        options: ["Curriculum Interpretation", "Teaching and Learning", "Instructional Preparation", "Curriculum Evaluation"],
        answer: "Curriculum Evaluation"
    },
    {
        question: "18. Which element of effective delivery refers to the skills, knowledge, and attitude of the teacher?",
        options: ["Conducive learning environment", "Teacher competence", "Assessment techniques", "Appropriate resources"],
        answer: "Teacher competence"
    },
    {
        question: "19. Which part of the delivery process involves collecting stakeholder input to gauge curriculum effectiveness?",
        options: ["Summative Assessment", "Formative Assessment", "Practical Evaluation", "Feedback Systems"],
        answer: "Feedback Systems"
    },
    {
        question: "20. A learning environment that is well-lit, ventilated, and free from noise pollution is described as:",
        options: ["Appropriate strategy", "Conducive learning environment", "ICT Resource center", "Teacher support system"],
        answer: "Conducive learning environment"
    },
    {
        question: "21. The systematic implementation process transforms curriculum plans into learning experiences aligned with:",
        options: ["Administrative policies.", "Financial budgets.", "Educational goals.", "Teacher preferences."],
        answer: "Educational goals."
    },
    {
        question: "22. What must teachers analyze during the Curriculum Interpretation stage?",
        options: ["Student social media accounts.", "Curriculum documents and align lessons with intended learning outcomes.", "University funding reports.", "Peer teacher schedules."],
        answer: "Curriculum documents and align lessons with intended learning outcomes."
    },
    {
        question: "23. Curriculum delivery ensures relevance and quality of education by matching curriculum documents with:",
        options: ["Textbook availability.", "Learner needs and societal requirements.", "Classroom size.", "Teacher retirement age."],
        answer: "Learner needs and societal requirements."
    },
    {
        question: "24. The core interaction using diverse methods like lectures, demonstrations, and discussions occurs during which stage?",
        options: ["Instructional Preparation", "Curriculum Interpretation", "Teaching and Learning", "Assessment"],
        answer: "Teaching and Learning"
    },
    {
        question: "25. Assessment measures the achievement of learning objectives through:",
        options: ["Staff meetings and memos.", "Rubrics, tests, and projects.", "Classroom cleaning schedules.", "Teacher attendance sheets."],
        answer: "Rubrics, tests, and projects."
    },
    {
        question: "26. Which modern resource is mentioned as providing a foundation for modern educational delivery and digital literacy development?",
        options: ["Overhead projectors.", "Smart classrooms and internet connectivity", "Chalkboards.", "Physical libraries only."],
        answer: "Smart classrooms and internet connectivity"
    },
    {
        question: "27. Workshops, conferences, and training to enhance teaching competencies are part of:",
        options: ["Teaching aids access.", "Professional guidance.", "Faculty development programs.", "Digital resources access."],
        answer: "Faculty development programs."
    },
    {
        question: "28. Providing teachers with laboratories, ICT resources, and digital libraries falls under which support system?",
        options: ["Professional guidance.", "Digital resources.", "Teaching aids access.", "Assessment techniques."],
        answer: "Teaching aids access."
    },
    {
        question: "29. Which type of assessment focuses on measuring applied skills and knowledge application in real contexts (e.g., lab work)?",
        options: ["Summative Assessment", "Formative Assessment", "Practical Evaluation", "Diagnostic Assessment"],
        answer: "Practical Evaluation"
    },
    {
        question: "30. The continuous improvement cycle in the delivery process ensures the curriculum remains:",
        options: ["Static and unchanged.", "Dynamic and relevant.", "Strictly policy-driven.", "Limited by resources."],
        answer: "Dynamic and relevant."
    },
    {
        question: "31. In the Lecture method, what is the teacher's typical role?",
        options: ["Active Participant, Debater", "Facilitator, Moderator", "Expert, Narrator", "Coach, Critiquer"],
        answer: "Expert, Narrator"
    },
    {
        question: "32. The Class Discussion method is most effective when the teacher acts as a:",
        options: ["Demonstrator", "Problem-Poser", "Facilitator, Moderator", "Assessor, Facilitator"],
        answer: "Facilitator, Moderator"
    },
    {
        question: "33. The Demonstration method is most appropriate for teaching:",
        options: ["Theoretical concepts only.", "Practical skills and procedures.", "Emotional resilience.", "Historical timelines."],
        answer: "Practical skills and procedures."
    },
    {
        question: "34. The effectiveness of Demonstration increases when learners can immediately practice the skill themselves, following the:",
        options: ["\"You watch\" model.", "\"I do\" model.", "\"We do, You do\" model.", "\"They learn\" model."],
        answer: "\"We do, You do\" model."
    },
    {
        question: "35. In Problem-Solving, the teacher acts primarily as the:",
        options: ["Passive Listener", "Designer, Creator", "Problem-Poser, Coach", "Self-Assessor, Planner"],
        answer: "Problem-Poser, Coach"
    },
    {
        question: "36. Which method involves students working in small groups to achieve a common goal, with the teacher acting as an Architect or Monitor?",
        options: ["Lecture", "Problem-Solving", "Cooperative Learning", "Argumentation"],
        answer: "Cooperative Learning"
    },
    {
        question: "37. Which method focuses on Inquiry & Exploration, where the teacher acts as a Guide and Questioner?",
        options: ["Guided-Discovery", "Concept Mapping", "Metacognition", "Demonstration"],
        answer: "Guided-Discovery"
    },
    {
        question: "38. Which strategy focuses on Visual Organization, where students are the Organizer and Connector?",
        options: ["Project-Based Learning", "Concept Mapping", "Competency-Based Learning", "Class Discussion"],
        answer: "Concept Mapping"
    },
    {
        question: "39. Which method involves the teacher acting as a Prompter/Reflector and the student as a Self-Assessor/Planner?",
        options: ["Argumentation", "Lecture", "Metacognition", "Demonstration"],
        answer: "Metacognition"
    },
    {
        question: "40. Argumentation focuses on developing skills in:",
        options: ["Manual dexterity.", "Memorization of facts.", "Persuasion & Reasoning", "Mathematical calculations."],
        answer: "Persuasion & Reasoning"
    },
    {
        question: "41. Which method focuses on Deep, Authentic Inquiry, where the student is the Designer, Creator, or Innovator?",
        options: ["Lecture", "Project-Based Learning", "Guided-Discovery", "Class Discussion"],
        answer: "Project-Based Learning"
    },
    {
        question: "42. The Competency-Based Learning method primarily focuses on achieving:",
        options: ["Group consensus.", "Passive listening.", "Mastery & Proficiency", "Quick information turnover."],
        answer: "Mastery & Proficiency"
    },
    {
        question: "43. The CTCA (Culturally-Responsive Teaching) approach aims to reduce learning anxiety by presenting content that is:",
        options: ["Purely abstract.", "Contextual: Familiar and relevant to the learner.", "Historically biased.", "Highly specialized and narrow."],
        answer: "Contextual: Familiar and relevant to the learner."
    },
    {
        question: "44. Which approach aims to bridge the gap between abstract academic concepts and the learner's real world?",
        options: ["Lecture", "CTCA (Culturally-Responsive Teaching)", "Summative Assessment", "Demonstration"],
        answer: "CTCA (Culturally-Responsive Teaching)"
    },
    {
        question: "45. Which method requires the teacher to be skilled in facilitating conversation and ensuring broad participation?",
        options: ["Lecture", "Class Discussion", "Competency-Based Learning", "Demonstration"],
        answer: "Class Discussion"
    },
    {
        question: "46. When using the Lecture method, effectiveness increases when combined with:",
        options: ["More passive listening.", "Questions, short activities, or multimedia.", "Longer speaking time for the lecturer.", "Fewer breaks."],
        answer: "Questions, short activities, or multimedia."
    },
    {
        question: "47. Which teaching strategy involves the teacher acting as an 'Assessor, Facilitator' and the student as a 'Self-Paced Learner'?",
        options: ["Project-Based Learning", "Competency-Based Learning", "Problem-Solving", "Argumentation"],
        answer: "Competency-Based Learning"
    },
    {
        question: "48. A major consideration for Cooperative Learning is that the teacher must primarily monitor the group dynamics to ensure:",
        options: ["Total silence.", "Collaboration and Teamwork", "Individual competition.", "Speed of completion."],
        answer: "Collaboration and Teamwork"
    },
    {
        question: "49. What is the student's role in the Demonstration method?",
        options: ["Problem-Poser", "Self-Assessor", "Observer", "Claim-Maker"],
        answer: "Observer"
    },
    {
        question: "50. The Teaching and Learning stage of delivery is characterized by the use of:",
        options: ["Budget planning.", "Diverse methods, including lectures, demonstrations, and field trips.", "Curriculum document analysis.", "Policy formulation."],
        answer: "Diverse methods, including lectures, demonstrations, and field trips."
    }
];
// --- End of 50 Questions Data ---


// ... [The large ALL_QUESTIONS array of 50 objects goes here] ... 

// Global state variables
let currentQuiz = []; 
let totalQuestionsCount = 0; 
let userAnswers = []; // NEW: Array to store user selections for review

// DOM element references
const configSection = document.getElementById('config-section');
const quizSection = document.getElementById('quiz');
const questionsContainer = document.getElementById('questions-container');
const resultsSection = document.getElementById('results');
const scoreText = document.getElementById('score-text');
const questionInfo = document.getElementById('question-info');
const countOptionsEl = document.getElementById('question-count-options');
const startBtn = document.getElementById('start-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');
const answerKeyEl = document.getElementById('answer-key'); // NEW: Reference to the answer key container

const QUESTION_COUNTS = [10, 20, 30, 40, 50];


/**
 * Renders the initial configuration screen with question count options. (UNCHANGED)
 */
function renderConfig() {
    configSection.classList.remove('hidden');
    quizSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    answerKeyEl.innerHTML = '<h3>Review Your Answers:</h3>'; // Clear previous key on restart

    countOptionsEl.innerHTML = '';
    
    QUESTION_COUNTS.forEach(count => {
        const optionLabel = document.createElement('label');
        optionLabel.classList.add('answer-option');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'question-count';
        input.value = count;
        
        const optionText = document.createTextNode(count);
        
        optionLabel.appendChild(input);
        optionLabel.appendChild(optionText);
        
        countOptionsEl.appendChild(optionLabel);
    });
}

/**
 * Utility function to shuffle an array (Fisher-Yates algorithm). (UNCHANGED)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Initializes the quiz by selecting questions and rendering them. (SLIGHTLY MODIFIED)
 */
function startQuiz(count) {
    if (count === 0) {
        alert("Please select the number of questions you want to attempt.");
        return;
    }
    
    // Reset user answers for the new quiz
    userAnswers = []; 

    // 1. Shuffle all questions and select the requested count
    const shuffledQuestions = shuffleArray([...ALL_QUESTIONS]);
    currentQuiz = shuffledQuestions.slice(0, count);
    totalQuestionsCount = count;
    
    // 2. Update UI
    configSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    questionInfo.textContent = `Attempting ${totalQuestionsCount} question(s).`;
    questionsContainer.innerHTML = ''; 

    // 3. Render the selected questions
    currentQuiz.forEach((q, qIndex) => {
        const questionBlock = document.createElement('div');
        questionBlock.classList.add('question-block');
        
        // Question Text
        const questionEl = document.createElement('h3');
        questionEl.textContent = `${qIndex + 1}. ${q.question.replace(/^\d+\.\s*/, '')}`; 
        questionBlock.appendChild(questionEl);
        
        // Answer Options Container
        const answerOptionsEl = document.createElement('div');
        answerOptionsEl.classList.add('answer-options');

        // Shuffle options to prevent rote memorization of order
        const shuffledOptions = shuffleArray([...q.options]);

        shuffledOptions.forEach((option) => {
            const optionLabel = document.createElement('label');
            optionLabel.classList.add('answer-option');
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${qIndex}`; 
            input.value = option;
            
            const optionText = document.createTextNode(option);
            
            optionLabel.appendChild(input);
            optionLabel.appendChild(optionText);
            
            answerOptionsEl.appendChild(optionLabel);
        });

        questionBlock.appendChild(answerOptionsEl);
        questionsContainer.appendChild(questionBlock);
    });
}

/**
 * Generates the review section showing correct answers. (NEW FUNCTION)
 */
function displayAnswerKey(answers) {
    answerKeyEl.innerHTML = '<h3>Review Your Answers:</h3>';

    answers.forEach((result, index) => {
        const qData = currentQuiz[index];
        const resultBlock = document.createElement('div');
        resultBlock.classList.add('result-question');
        resultBlock.classList.add(result.isCorrect ? 'correct' : 'incorrect');

        const qTitle = document.createElement('h4');
        qTitle.textContent = `${index + 1}. ${qData.question.replace(/^\d+\.\s*/, '')}`;
        resultBlock.appendChild(qTitle);

        const userAnswer = document.createElement('p');
        userAnswer.classList.add('user-answer-text');
        userAnswer.textContent = result.userAnswer 
            ? `Your choice: ${result.userAnswer}` 
            : `Your choice: (No answer selected)`;
        resultBlock.appendChild(userAnswer);

        if (!result.isCorrect) {
            const correctAnswer = document.createElement('p');
            correctAnswer.classList.add('correct-answer-text');
            correctAnswer.textContent = `Correct Answer: ${qData.answer}`;
            resultBlock.appendChild(correctAnswer);
        }

        answerKeyEl.appendChild(resultBlock);
    });
}


/**
 * Checks all answers simultaneously when the Submit button is clicked. (MODIFIED)
 */
function submitQuiz() {
    let score = 0;
    let unansweredCount = 0;
    userAnswers = []; // Clear and rebuild answers array

    currentQuiz.forEach((q, qIndex) => {
        const questionName = `question-${qIndex}`;
        const selectedInput = document.querySelector(`input[name="${questionName}"]:checked`);
        
        const selectedValue = selectedInput ? selectedInput.value : null;
        const isCorrect = selectedValue === q.answer;

        userAnswers.push({
            questionIndex: qIndex,
            userAnswer: selectedValue,
            isCorrect: isCorrect,
            correctAnswer: q.answer
        });
        
        if (selectedInput) {
            if (isCorrect) {
                score++;
            }
        } else {
            unansweredCount++;
        }
    });

    if (unansweredCount > 0) {
        alert(`You must answer all questions! You still have ${unansweredCount} question(s) left.`);
        return;
    }

    // Display results
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    scoreText.textContent = `Your final score: ${score} out of ${totalQuestionsCount}`;
    
    // Call new function to display answers
    displayAnswerKey(userAnswers);
}

// Event listeners (MODIFIED RESTART)
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', renderConfig); // Restart goes back to config screen

startBtn.addEventListener('click', () => {
    const selectedInput = document.querySelector('input[name="question-count"]:checked');
    const count = selectedInput ? parseInt(selectedInput.value) : 0;
    startQuiz(count);
});

// Initial load
renderConfig();