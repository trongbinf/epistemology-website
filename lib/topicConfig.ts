export interface Topic {
  id: number;
  title: string;
  href: string;
  icon: string;
  gradient: string;
  description: string;
}

export const topics: Topic[] = [
  {
    id: 1,
    title: 'Giới thiệu',
    href: '/introduction',
    description: 'Nhận thức luận là gì? Tìm hiểu về vai trò và vị trí của nhận thức luận trong triết học Mác-Lênin.',
    icon: '📚',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
  },
  {
    id: 2,
    title: 'Nguồn gốc & Bản chất',
    href: '/origin',
    description: 'Khám phá nguồn gốc và bản chất của nhận thức. Mối quan hệ biện chứng giữa chủ thể và khách thể.',
    icon: '🌱',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
  },
  {
    id: 3,
    title: 'Trình độ nhận thức',
    href: '/levels',
    description: 'Phân biệt nhận thức kinh nghiệm và lý luận, nhận thức thường thức và khoa học.',
    icon: '📊',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  },
  {
    id: 4,
    title: 'Thực tiễn',
    href: '/practice',
    description: 'Thực tiễn là nền tảng, động lực, mục đích và tiêu chuẩn của nhận thức.',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
  },
  {
    id: 5,
    title: 'Quá trình nhận thức',
    href: '/cognition',
    description: 'Từ nhận thức cảm tính đến nhận thức lý tính: Cảm giác, tri giác, biểu tượng, khái niệm, phán đoán, suy lý.',
    icon: '🧩',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #ec4899 100%)',
  },
  {
    id: 6,
    title: 'Con đường biện chứng',
    href: '/dialectical-path',
    description: 'Chu trình nhận thức: Từ thực tiễn đến lý luận và từ lý luận đến thực tiễn.',
    icon: '🔄',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  },
  {
    id: 7,
    title: 'Chân lý',
    href: '/truth',
    description: 'Chân lý trong chủ nghĩa duy vật biện chứng: Tính khách quan, tương đối, tuyệt đối và cụ thể.',
    icon: '💎',
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #fbbf24 100%)',
  },
];

export function getTopicByHref(href: string): Topic | undefined {
  return topics.find(topic => topic.href === href);
}

export function getPreviousTopic(currentHref: string): Topic | null {
  const currentTopic = getTopicByHref(currentHref);
  if (!currentTopic || currentTopic.id === 1) return null;
  return topics.find(topic => topic.id === currentTopic.id - 1) || null;
}

export function getNextTopic(currentHref: string): Topic | null {
  const currentTopic = getTopicByHref(currentHref);
  if (!currentTopic || currentTopic.id === topics.length) return null;
  return topics.find(topic => topic.id === currentTopic.id + 1) || null;
}

export function getTopicProgress(currentHref: string): { current: number; total: number } {
  const currentTopic = getTopicByHref(currentHref);
  return {
    current: currentTopic?.id || 0,
    total: topics.length,
  };
}
