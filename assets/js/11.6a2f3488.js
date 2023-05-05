(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{284:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" Redis")]),s._v(" "),a("h2",{attrs:{id:"_1-redis是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis是什么"}},[s._v("#")]),s._v(" 1. Redis是什么")]),s._v(" "),a("p",[s._v("Redis（Remote Dictionary Server）是一个key-value的NoSQL产品，数据都是缓存在内存中，周期性的数据持久化。\n  Redis是一个开源的使用ANSI C语言编写、遵守BSD协议、支持网络、可基于内存亦可持久化的日志型、Key-Value数据库，并提供多种语言的API。它通常被称为数据结构服务器，因为值（value）可以是 字符串(String)、 哈希(Map)、列表(list)、 集合(sets) 和 有序集合(sorted sets)等类型。")]),s._v(" "),a("h3",{attrs:{id:"_1-1-三个特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-三个特点"}},[s._v("#")]),s._v(" 1.1 三个特点")]),s._v(" "),a("p",[s._v("1、Redis 支持数据持久化，可以将内存中的数据保存在磁盘中，重启的时候可以再次加载进行使用。\n2、Redis 提供 list，set，zset，hash等数据结构缓存。\n3、Redis支持数据的备份。")]),s._v(" "),a("h3",{attrs:{id:"_1-2-redis优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-redis优势"}},[s._v("#")]),s._v(" 1.2 Redis优势")]),s._v(" "),a("p",[s._v("1、性能极高-Redis能读的速度是110000次/s，写的速度是81000次/s。\n2、丰富的数据类型-Redis支持二进制案例的lists，sets，Hashes及sets Ordered数据类型操作。\n3、丰富的特性-Redis还支持public/subscribe。")]),s._v(" "),a("h3",{attrs:{id:"_1-3-redis与其他key-value存储的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-redis与其他key-value存储的不同"}},[s._v("#")]),s._v(" 1.3 Redis与其他key-value存储的不同")]),s._v(" "),a("p",[s._v("1、Redis有着更为复杂的数据结构并且提供对他们的原子性操作，这是一个不同于其他数据库的进化路径。\n2、Redis的数据类型都是基于基本数据结构的同时对程序员透明，无需进行额外的抽象。")]),s._v(" "),a("h2",{attrs:{id:"_2-linux安装redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-linux安装redis"}},[s._v("#")]),s._v(" 2 linux安装Redis")]),s._v(" "),a("h3",{attrs:{id:"_2-1-docker搜索redis镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-docker搜索redis镜像"}},[s._v("#")]),s._v(" 2.1 Docker搜索redis镜像")]),s._v(" "),a("blockquote",[a("p",[s._v("命令：docker search <镜像名称>")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker search redis\n")])])]),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C10092%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230223155759120.png",alt:"image-20230223155759120"}})]),s._v(" "),a("h3",{attrs:{id:"_2-2-docker拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-docker拉取镜像"}},[s._v("#")]),s._v(" 2.2 Docker拉取镜像")]),s._v(" "),a("blockquote",[a("p",[s._v("命令：：docker pull <镜像名称>:<版本号>")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull redis\n")])])]),a("h3",{attrs:{id:"_2-3-docker挂载配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-docker挂载配置文件"}},[s._v("#")]),s._v(" 2.3 Docker挂载配置文件")]),s._v(" "),a("p",[s._v("接下来就是要将redis 的配置文件进行挂载，以配置文件方式启动redis 容器。（挂载：即将宿主的文件和容器内部目录相关联，相互绑定，在宿主机内修改文件的话也随之修改容器内部文件）")]),s._v(" "),a("p",[s._v("1）、挂载 redis 的配置文件")]),s._v(" "),a("p",[s._v("2）、挂载 redis 的持久化文件（为了数据的持久化）。")]),s._v(" "),a("p",[s._v("liunx 下redis.conf文件位置： /home/redis/myredis/redis.conf")]),s._v(" "),a("p",[s._v("liunx 下redis的data文件位置 ： /home/redis/myredis/data")]),s._v(" "),a("h3",{attrs:{id:"_2-4-启动redis-容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-启动redis-容器"}},[s._v("#")]),s._v(" 2.4  启动redis 容器")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --restart=always --log-opt max-size=100m --log-opt max-file=2 -p 6379:6379 --name myredis -v /home/redis/myredis/myredis.conf:/etc/redis/redis.conf -v /home/redis/myredis/data:/data -d redis redis-server /etc/redis/redis.conf  --appendonly yes  --requirepass 123456\n")])])]),a("ol",[a("li",[a("code",[s._v("--restart=always")]),s._v(" 总是开机启动")]),s._v(" "),a("li",[a("code",[s._v("--log")]),s._v("是日志方面的")]),s._v(" "),a("li",[a("code",[s._v("-p 6379:6379")]),s._v(" 将6379端口挂载出去")]),s._v(" "),a("li",[a("code",[s._v("--name")]),s._v(" 给这个容器取一个名字")]),s._v(" "),a("li",[s._v("-v 数据卷挂载\n"),a("ul",[a("li",[s._v("/home/redis/myredis/myredis.conf:/etc/redis/redis.conf 这里是将 liunx 路径下的myredis.conf 和redis下的redis.conf 挂载在一起。")]),s._v(" "),a("li",[s._v("/home/redis/myredis/data:/data 这个同上")])])]),s._v(" "),a("li",[a("code",[s._v("-d redis")]),s._v(" 表示后台启动redis")]),s._v(" "),a("li",[a("code",[s._v("redis-server /etc/redis/redis.conf")]),s._v(" 以配置文件启动redis，加载容器内的conf文件，最终找到的是挂载的目录 "),a("code",[s._v("/etc/redis/redis.conf")]),s._v(" 也就是liunx下的/home/redis/myredis/myredis.conf")]),s._v(" "),a("li",[a("code",[s._v("–appendonly yes")]),s._v(" 开启redis 持久化")]),s._v(" "),a("li",[s._v("–requirepass 123456设置密码")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/f2c7c58a3f1740c2b1d0a750f671f6eb.png#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h2",{attrs:{id:"_3-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试"}},[s._v("#")]),s._v(" 3 测试")]),s._v(" "),a("h3",{attrs:{id:"_3-1-通过docker-ps指令查看启动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-通过docker-ps指令查看启动状态"}},[s._v("#")]),s._v(" 3.1  通过docker ps指令查看启动状态")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps -a |grep myredis # 通过docker ps指令查看启动状态，是否成功.\n")])])]),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C10092%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230223162145014.png",alt:"image-20230223162145014"}})]),s._v(" "),a("h3",{attrs:{id:"_3-2-查看容器运行日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-查看容器运行日志"}},[s._v("#")]),s._v(" 3.2 查看容器运行日志")]),s._v(" "),a("blockquote",[a("p",[s._v("命令：docker logs --since 30m <容器名>")])]),s._v(" "),a("p",[s._v("此处 "),a("code",[s._v("--since 30m")]),s._v(" 是查看此容器30分钟之内的日志情况。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker logs --since 30m myredis\n")])])]),a("h3",{attrs:{id:"_3-3-进入容器内部"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-进入容器内部"}},[s._v("#")]),s._v(" 3.3  进入容器内部")]),s._v(" "),a("blockquote",[a("p",[s._v("命令：docker exec -it <容器名> redis-cli")])]),s._v(" "),a("h4",{attrs:{id:"_3-3-1-验证密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-验证密码"}},[s._v("#")]),s._v(" 3.3.1 验证密码")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("auth 123456\n")])])]),a("p",[s._v("查看当前redis有没有设置密码")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("config get requirepass\n")])])]),a("h2",{attrs:{id:"springboot整合redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot整合redis"}},[s._v("#")]),s._v(" SpringBoot整合Redis")]),s._v(" "),a("ul",[a("li",[s._v("引入依赖")])]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("spring-boot-starter-data-redis"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("ul",[a("li",[s._v("配置文件")])]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis服务器地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.232.135\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Redis服务器端口号")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用的数据库索引，默认是0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接超时时间")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1800000")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置密码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])])]),a("ul",[a("li",[s._v("测试代码")])]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@SpringBootTest")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MybatisPlusDemoApplicationTests")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Resource")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisTemplate")]),s._v(" redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Test")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Test3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ValueOperations")]),s._v(" valueOperations "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        valueOperations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"asd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("valueOperations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("h4",{attrs:{id:"解决键乱码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决键乱码问题"}},[s._v("#")]),s._v(" "),a("strong",[s._v("解决键乱码问题")])]),s._v(" "),a("p",[s._v("查看刚刚存入"),a("a",{attrs:{href:"https://so.csdn.net/so/search?q=Redis%E6%95%B0%E6%8D%AE%E5%BA%93&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[s._v("Redis数据库"),a("OutboundLink")],1),s._v("的数据")]),s._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C10092%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230223173239264.png",alt:"image-20230223173239264"}})]),s._v(" "),a("p",[s._v("是因为在使用默认的对象"),a("code",[s._v("redisTemplate")]),s._v("时，会把value值序列化为byte类型，所以就出现了上图的结果。")]),s._v(" "),a("h4",{attrs:{id:"自定义序列化方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义序列化方式"}},[s._v("#")]),s._v(" 自定义序列化方式")]),s._v(" "),a("p",[s._v("JSON序列化器")]),s._v(" "),a("p",[s._v("首先要编写一个配置类：")]),s._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Configuration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Bean")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisTemplate")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("redisTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisConnectionFactory")]),s._v(" redisConnectionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UnknownHostException")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建模板")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisTemplate")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" redisTemplate "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisTemplate")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置连接工厂")]),s._v("\n        redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setConnectionFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redisConnectionFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置序列化工具")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenericJackson2JsonRedisSerializer")]),s._v(" jsonRedisSerializer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GenericJackson2JsonRedisSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// key和 hashKey采用 string序列化")]),s._v("\n        redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setKeySerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHashKeySerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RedisSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// value和 hashValue采用 JSON序列化")]),s._v("\n        redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setValueSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jsonRedisSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setHashValueSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("jsonRedisSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"redis-conf配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-conf配置文件"}},[s._v("#")]),s._v(" Redis.conf配置文件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# bind 192.168.1.100 10.0.0.1\n# bind 127.0.0.1 ::1\n#bind 127.0.0.1\n\nprotected-mode no\nport 6379\ntcp-backlog 511\nrequirepass 000415\ntimeout 0\ntcp-keepalive 300\ndaemonize no\nsupervised no\npidfile /var/run/redis_6379.pid\nloglevel notice\nlogfile ""\ndatabases 30\nalways-show-logo yes\nsave 900 1\nsave 300 10\nsave 60 10000\nstop-writes-on-bgsave-error yes\nrdbcompression yes\nrdbchecksum yes\ndbfilename dump.rdb\ndir ./\nreplica-serve-stale-data yes\nreplica-read-only yes\nrepl-diskless-sync no\nrepl-disable-tcp-nodelay no\nreplica-priority 100\nlazyfree-lazy-eviction no\nlazyfree-lazy-expire no\nlazyfree-lazy-server-del no\nreplica-lazy-flush no\nappendonly yes\nappendfilename "appendonly.aof"\nno-appendfsync-on-rewrite no\nauto-aof-rewrite-percentage 100\nauto-aof-rewrite-min-size 64mb\naof-load-truncated yes\naof-use-rdb-preamble yes\nlua-time-limit 5000\nslowlog-max-len 128\nnotify-keyspace-events ""\nhash-max-ziplist-entries 512\nhash-max-ziplist-value 64\nlist-max-ziplist-size -2\nlist-compress-depth 0\nset-max-intset-entries 512\nzset-max-ziplist-entries 128\nzset-max-ziplist-value 64\nhll-sparse-max-bytes 3000\nstream-node-max-bytes 4096\nstream-node-max-entries 100\nactiverehashing yes\nhz 10\ndynamic-hz yes\naof-rewrite-incremental-fsync yes\nrdb-save-incremental-fsync yes\n')])])])])}),[],!1,null,null,null);a.default=n.exports}}]);