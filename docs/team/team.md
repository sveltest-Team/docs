---
layout: doc
title: 关于我

---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: './1.png',
    name: '子 夜',
    title: '测试工程师中的背锅侠',
    links: [
      { icon: 'github', link: 'https://github.com/gfl13453001' },
     // { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },

]
</script>




<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      个人简介
    </template>
    <template #lead>
    一个正在测试领域中的小白，立志成为全栈测试开发。喜欢没事就研究自己感兴趣的前沿技术目前从事AI测试工作研究领域不仅限于测试、开发、AI及其计算机相关领域等知识
    </template>
    
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
