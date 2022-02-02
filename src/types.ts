export type User = {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  avatar: string;
  id: number;
}

export type Message = {
  userId: number;
  messageText: string;
  conversationId: number;
  id: number;
}

export type Conversation = {
  userId: number;
  participantId: number;
  id: number;
}

export type ConversationWithMessages = Conversation & { messages: Message[] }

export type ModalType = 'new-user' | 'start-chat' | ''