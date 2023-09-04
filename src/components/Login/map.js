/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { HomeOutlined, LockOutlined, MailOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import styles from './index.less'
import { getIntlContent } from '../../utils/IntlUtils';

const map = {
  VerifyCode: {
    component: Input,
    props: {
      size: 'large',
      prefix: <HomeOutlined className={styles.prefixIcon} />,
    },
    rules: [
      {
        required: true,
        message: getIntlContent("SHENYU.SYSTEM.VERIFICATION.CODE"),
      },
    ],
  }
  ,
  UserName: {
    component: Input,
    props: {
      size: 'large',
      prefix: <UserOutlined className={styles.prefixIcon} />,
      placeholder: 'admin',
    },
    rules: [
      {
        required: true,
        message: getIntlContent("SHENYU.SYSTEM.USER.NAME"),
      },
    ],
  },
  Password: {
    component: Input,
    props: {
      size: 'large',
      prefix: <LockOutlined className={styles.prefixIcon} />,
      type: 'password',
      placeholder: '888888',
    },
    rules: [
      {
        required: true,
        message: getIntlContent("SHENYU.SYSTEM.USER.PASSWORD"),
      },
    ],
  },
  Mobile: {
    component: Input,
    props: {
      size: 'large',
      prefix: <MobileOutlined className={styles.prefixIcon} />,
      placeholder: 'mobile number',
    },
    rules: [
      {
        required: true,
        message: 'Please enter mobile number!',
      },
      {
        pattern: /^1\d{10}$/,
        message: 'Wrong mobile number format!',
      },
    ],
  },
  Captcha: {
    component: Input,
    props: {
      size: 'large',
      prefix: <MailOutlined className={styles.prefixIcon} />,
      placeholder: 'captcha',
    },
    rules: [
      {
        required: true,
        message: 'Please enter Captcha!',
      },
    ],
  },
};

export default map;
