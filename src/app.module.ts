import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { WorkModule } from './work/work.module';
import { UserModule } from './user/user.module';
import { SocialModule } from './social/social.module';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';
import { PostTagsModule } from './post_tags/post_tags.module';

@Module({
  imports: [ProjectModule, WorkModule, UserModule, SocialModule, PostsModule, TagsModule, PostTagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
