<template>
	<div>
		<h2>{{ form.title }}</h2>
		<p>{{ form.content }}</p>
		<p class="text-muted">{{ form.createAt }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-danger">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
	id: Number,
});

const router = useRouter();
// const id = route.params.id;

/**
 *  ref
 *  장)객체 할당 가능 { ...data} 형식 / 일관성 유지 가능
 *	단) form.value.title, form.value.content
 *
 * reactive
 * 장) form.title, form.content
 * 단) 객체 할당 불가능
 *
 * => content 페이지에선 ref가 더 적합
 */
const form = ref({});
// let form = reactive({});

const fetchPost = () => {
	const data = getPostById(props.id);
	form.value = { ...data };
	/** 아래 두 개는 reactive일 때 선언방식 */
	// form.title = data.title;
	// form.content = data.content;
};
fetchPost();
const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};
const goEditPage = () => {
	router.push({
		name: 'PostEdit',
		params: {
			id: props.id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
