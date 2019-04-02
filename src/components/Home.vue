<template>
  <div class="webrtc--main">
    <div class="webrtc--list--user" :class="{'webrtc--active__list--user': showListUser}">
      <div class="webrtc-container">
        <div class="webrtc-row">
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--form__search">
            <input type="text" placeholder="Search friends...">
            <div>
              <img :src="imgs.icons.SearchIcons" alt>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Vincent Porter</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__online"></span>
                <span class="green">online</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Aiden Chavez</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__busy"></span>
                <span class="orange">busy</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Mike Thomas</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__offline"></span>
                <span>offline</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Erica Hughes</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__online"></span>
                <span class="green">online</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Ginger Johnston</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__busy"></span>
                <span class="orange">busy</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Tracy Carpenter</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__busy"></span>
                <span class="orange">busy</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Christian Kelly</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__online"></span>
                <span class="green">online</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Vincent Klarkent</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__online"></span>
                <span class="green">online</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Monica Ward</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__busy"></span>
                <span class="orange">busy</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Dean Henry</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__busy"></span>
                <span class="orange">busy</span>
              </div>
            </div>
          </div>
          <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--about">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg"
              alt="avatar"
            >
            <div class="webrtc--info">
              <div class="webrtc--info__name">Peyton Mckinney</div>
              <div class="webrtc--info__status">
                <span class="webrtc--status__online"></span>
                <span class="green">online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="webrtc--chat--box">
      <div class="webrtc--chat--box__first">
        <div class="webrtc-container-fluid">
          <div class="row">
            <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--chat--box__title">
              Chat with Vincent Porter
              <span>
                <span class="webrtc--status__online"></span>35 people online
              </span>
            </div>
            <div class="webrtc-col-12 webrtc-col-lg-12 webrtc--chat--box__participants">
              <span>
                <img :src="imgs.icons.TeamWork" alt=""> 62 participants
              </span>
              <span>
                <img :src="imgs.icons.DigitalCampaign" alt=""> Gallery
              </span>
              <span>
                <img :src="imgs.icons.Location" alt=""> find
              </span>
            </div>
          </div>
        </div>
        <div class="webrtc-rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>
      <div class="webrtc--chat--box__second" ref="screenChat">
        <div class="webrtc-container">
          <div class="row">
            <div class="webrtc-col-12">
              <div class="webrtc--form__message">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Vincent Porter</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms">Hi Vincent, how are you? How is the project coming along?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message webrtc--form__reply d-f-row-reverse">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Ginger Johnston</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms">Are we meeting today? Project has been already finished and I have results to show you.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Tracy Carpenter</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms"> Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Tracy Carpenter</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms"> The waves were crashing on the shore; it was a lovely sight
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message webrtc--form__reply d-f-row-reverse">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Ginger Johnston</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms">Actually everything was fine. I'm very excited to show this to our team.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Monica Ward</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms"> Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message  webrtc--form__reply d-f-row-reverse">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Ginger Johnston</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms">Wednesday is hump day, but has anyone asked the camel if he’s happy about it?
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="webrtc-col-12">
              <div class="webrtc--form__message">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg" class="webrtc--message__image" alt="">
                <div class="webrtc--message__content">
                  <div class="webrtc--message__name">
                    <div class="webrtc--message__info">
                      <span class="webrtc--status__online"></span>
                      <span>Christian Kelly</span>
                      <span>2:14pm</span>
                    </div>
                    <div class="webrtc--message__ms"> Sixty-Four comes asking for bread.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="webrtc--chat--box__third">
        <div class="webrtc--cb__third--form">
          <textarea class="webrtc--third--form__input" autoresize></textarea>
          <div class="webrtc--third--form__icons">
            <img
              :src="imgs.emoji.emoji23"
              alt
              class="webrtc--third--form__emoji"
              v-on:click="showBoxEmoji.status = !showBoxEmoji.status"
            >
          </div>
          <div class="webrtc--box__emoji" ref="boxEmoji" v-if="showBoxEmoji.status">
            <div class="webrtc--box__title">
              <button @click="showBoxEmoji = {...showBoxEmoji, flag: true, emoji: false}"><img :src="imgs.flags.flag52" alt=""></button>
              <button @click="showBoxEmoji = {...showBoxEmoji, flag: false, emoji: true}"><img :src="imgs.emoji.emoji14" alt=""></button>
            </div>
            <div class="webrtc--box__icons" v-if="showBoxEmoji.flag">
              <img v-for="(img, index) in imgs.flags" :key="index" :src="img" alt="">
            </div>
            <div class="webrtc--box__icons" v-if="showBoxEmoji.emoji">
              <img v-for="(img, index) in imgs.emoji" :key="index" :src="img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="webrtc--button__show" v-on:click="showListUser = !showListUser">
      <img :src="imgs.icons.Chat" alt>
    </div>
  </div>
</template>
<script>
import imgs from '@/router/images.js'
import _ from 'lodash'

export default {
  name: 'Home',
  data () {
    return {
      imgs,
      showListUser: false,
      showBoxEmoji: {
        status: false,
        flag: true,
        emoji: false
      }
    }
  },
  methods: {
    outsideClickListenerNav (e) {
      this.showBoxEmoji.status =  _.find([...e.path], i => i === this.$refs.boxEmoji) !== undefined
    }
  },
  mounted () {
    this.$refs.screenChat.scrollTo(0,this.$refs.screenChat.scrollHeight)
  },
  created () {
    document.addEventListener('mouseup', this.outsideClickListenerNav)
  }
}
</script>
