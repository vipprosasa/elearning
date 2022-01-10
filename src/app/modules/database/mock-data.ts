import { Course } from "../../components/course-item/course-item.component";
import { User } from "../login/login.component";

const slugify = (title: string) => {
  const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
  const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return title.toString().toLowerCase()
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
    .replace(/đ/gi, 'd')
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const courses: Course[] = [
  {
    name: 'Khoá sáng tác nhập môn',
    totalTime: 10,
    startDate: new Date(),
    imageUrl: 'https://img-c.udemycdn.com/course/480x270/2235576_b9d9_3.jpg',
    lecturers: [
      'Lê Cát Trọng Lý',
      'Nguyễn Thanh Tú'
    ],
    lessons: [
      {
        order: 1,
        name: 'Tìm hiểu nhạc lý',
        videoUrl: 'https://www.youtube.com/embed/plecW_gMfos',
        totalTime: '10m20s',
        lessonNeedCompleted: 2,
        isCompleted: true,
      },
      {
        order: 2,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
      {
        order: 3,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
      {
        order: 4,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
      {
        order: 5,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
      {
        order: 6,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
      {
        order: 7,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
      {
        order: 8,
        name: 'Trường độ, nhịp độ',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
    ]
  },
  {
    name: 'Lập trình Javascrip cơ bản',
    totalTime: 10,
    startDate: new Date(),
    imageUrl: 'https://st.quantrimang.com/photos/image/2018/07/31/debug-trong-javascript-200.jpg',
    lecturers: [
      'Mark Luke',
      'Ronaldo',
    ],
    lessons: [
      {
        order: 1,
        name: 'Cài đặt môi trường',
        videoUrl: 'https://www.youtube.com/embed/plecW_gMfos',
        totalTime: '10m20s',
        lessonNeedCompleted: 2,
        isCompleted: true,
      },
      {
        order: 2,
        name: 'Hello world',
        videoUrl: 'https://www.youtube.com/embed/Zzn9-ATB9aU',
        totalTime: '20m15s',
        lessonNeedCompleted: 3,
        isCompleted: false,
      },
    ]
  },
].map((e, i) => ({
  ...e, slug: slugify(e.name),
  id: i + '',
}));

export const users: User[] = [
  {
    username: 'user1',
    password: '12345678',
    fullname: 'Nguyễn Văn A',
    profileUrl: 'https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png',
  },
  {
    username: 'user2',
    password: '12345678',
    fullname: 'Nguyễn Văn B',
    profileUrl: 'https://cdn.vectorstock.com/i/1000x1000/20/67/woman-avatar-profile-vector-21372067.jpg',
  },
];