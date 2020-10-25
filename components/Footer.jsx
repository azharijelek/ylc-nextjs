//import Link from 'next/link'
import useUser from '@/lib/useUser'

export default function Footer() {
  const { user } = useUser()
  return (
    <>
      <footer className="ylc-footer">
        {!user ||
          (user.isLoggedIn !== true && (
            <div className="footer-up">
              <div className="join-text">
                Join Australia’s largest and longest-running digital resource for over 50s
              </div>
              <p>
                YourLifeChoices is Australia’s longest established and most trusted digital
                publication and website for the 50+ audience, with a core focus on <br /> helping
                Australians navigate midlife and the retirement landscape.
              </p>
            </div>
          ))}

        {/* for Public */}
        <div className="footer-bottom">
          <img
            src="https://cdn.statically.io/img/new.ylcdev.com.au/wp-content/themes/bimber-child-theme/assets/img/ylc-logo-simple-white.svg"
            alt="Your Life Choices"
            loading="lazy"
            width="225"
            height="53"
          />
          <p className="mt-4">
            YourLifeChoices is Australia’s most established and trusted digital publication for the
            50+ audience, with a core focus on helping Australians navigate midlife and the
            retirement landscape. <br /> Since 2000, YourLifeChoices has been providing Australians
            with essential news, articles and retirement resources – and membership is FREE!
          </p>
        </div>
      </footer>

      <style jsx>{`
        .ylc-footer {
          color: #fff;
          text-align: center;
          margin-top: 30px;

          .footer-up {
            background: #4f4f4f;
            padding: 30px 15px;
            p {
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              margin-bottom: 0;
              text-align: center;
            }

            .join-text {
              text-align: center;
              font-size: 24px;
              line-height: 34px;
              font-weight: bolder;
            }
          }

          .footer-bottom {
            background: #333;
            padding: 30px 15px;
            line-height: 1.75;
            p {
              font-size: 14px;
            }
          }
        }
      `}</style>
    </>
  )
}
