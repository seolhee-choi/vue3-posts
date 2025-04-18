// axios

const posts = [
	{ id: 1, title: '제목1', content: '내용1', createAt: '2023-01-01' },
	{ id: 2, title: '제목2', content: '내용2', createAt: '2023-02-02' },
	{ id: 3, title: '제목3', content: '내용3', createAt: '2023-03-03' },
	{ id: 4, title: '제목4', content: '내용4', createAt: '2023-04-04' },
	{ id: 5, title: '제목5', content: '내용5', createAt: '2023-05-05' },
];

export function getPosts() {
	// return axios.get('http://localhost:5000/posts');
	return posts;
}

export function getPostById(id) {
	// const numberId = parseInt(id);
	// const numberId = Number(id);
	return posts.find(item => item.id === id); //PostDetailView에서 id를 Number로 변환했기 때문에 parseInt나 Number로 감싸지 않아도된다.
}
