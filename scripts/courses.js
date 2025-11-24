const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseList = document.getElementById('course-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const dialog = document.getElementById('course-details');
//const allBtn = document.getElementById('all-courses');
//const wddBtn = document.getElementById('wdd-courses');
//const cseBtn = document.getElementById('cse-courses');

function displayCourses(courseArray) {
    courseList.innerHTML = '';

    courseArray.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        courseCard.textContent = `${course.subject} ${course.number}`;

       // if (course.completed) {
        //    courseCard.style.backgroundColor = '#AAABB8'; // accent color
          //  courseCard.style.borderLeft = '6px solid #4CAF50'; // green border for completed courses
        //} else {
        //    courseCard.style.backgroundColor = '#FFFFFF'; // white for incomplete courses  
        //    courseCard.style.borderLeft = '6px solid #f44336'; // red border for incomplete courses
        //}

        //Open dialog on click
        courseCard.addEventListener('click',()=>{
            showCourseDialog(course)
        });

        courseList.appendChild(courseCard)
    });
}
     /*  courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
            <p><strong>Status:</strong>
            <span style="color: ${course.completed ? 'green' : 'red'};">
            ${course.completed ? 'Completed' : '⏳ In Progress'}
            </span>
            </p>
        `;

        courseList.appendChild(courseCard);*/

function showCourseDialog(course) {
        dialog.innerHTML =`
        <button id ="close-btn">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technology</strong>: ${course.technology.join(', ')}</p>
        `;

        dialog.showModal();

        dialog.querySelector('#close-btn').onclick = () => dialog.close();
    }

    //Filter logic
filterButtons.forEach(btn =>{
        btn.addEventListener('click',()=>{
            const filter = btn.dataset.filter;

            if (filter === 'ALL'){
                displayCourses(courses);
            }else {
                const filtered = courses.filter(course => course.subject === filter);
                displayCourses(filtered);
            }
    });
});

// Initial display of all courses
displayCourses(courses);


//allBtn.addEventListener('click', () => displayCourses(courses));
//wddBtn.addEventListener('click', () => {
//    const wddCourses = courses.filter(course => course.subject === 'WDD');
//    displayCourses(wddCourses);
//});
//cseBtn.addEventListener('click', () => {
//    const cseCourses = courses.filter(course => course.subject === 'CSE');
//    displayCourses(cseCourses);
//});

//const myCertificate = document.querySelector('#course-details');
//const openModal = document.querySelector('#open-btn');
//const closeModal = document.querySelector('.close-btn');

//function displayCourseDetails(course) {
//    myCertificate.innerHTML = "",
//    myCertificate.innerHTML =`
//    <button id ="close-btn">❌</button>
//    <h2>${course.subject} ${course.number}</h2>
//    <h3>${course.title}</h3>
//    <p><strong>Credits</strong>: ${course.credits}</p>
//    <p><strong>Certificate</strong>: ${course.certificate}</p>
//    <p>${course.description}</p>
//    <p><strong>Technology</strong>: ${course.technology.join(', ')}</p>
//    `;
//    myCertificate.showModal();

//    myCertificate.querySelector('#close-btn').addEventListener('click',() => {
//        myCertificate.close();
//    });
//}

//openModal.addEventListener('click',()=>{
//    displayCourseDetails(courses[4]);
//});