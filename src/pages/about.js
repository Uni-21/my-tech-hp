/** @jsx jsx */
import { jsx, Heading } from "theme-ui"
import { Helmet } from "react-helmet"

const About = () => (
  <div>
    <Helmet>
      <title>About me - がらくた倉庫</title>
    </Helmet>
    <div sx={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      py: 6,
      px: 4,
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        pointerEvents: "none"
      }
    }}>
      <div sx={{
        maxWidth: "600px",
        mx: "auto",
        color: "#f8f8f8",
        position: "relative",
        zIndex: 1
      }}>
        <div sx={{
          textAlign: "center",
          mb: 6,
          transform: "translateY(0)",
          transition: "all 0.6s ease",
          animation: "fadeInUp 0.8s ease-out"
        }}>
          <Heading sx={{
            fontSize: [5, 6, 7],
            mb: 4,
            fontFamily: "heading",
            textShadow: "0 2px 8px rgba(0,0,0,0.1)",
            color: "#f8f8f8"
          }}>
            About me
          </Heading>
          <div sx={{
            fontSize: [2, 3],
            lineHeight: 1.8,
            variant: "texts.bigger",
            textShadow: "0 2px 4px rgba(0,0,0,0.2)"
          }}>
            webサービスを作るエンジニア。<br />
            バックエンドを主戦場としており、個人開発でいろんな分野にチャレンジ中。
          </div>
        </div>

        <div sx={{
          bg: "rgba(255, 255, 255, 0.25)",
          p: 5,
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          mb: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
          }
        }}>
          <Heading as="h3" sx={{
            fontSize: [3, 4],
            mb: 4,
            fontFamily: "heading",
            color: "#2d3748"
          }}>
            Specialties
          </Heading>
          <ul sx={{
            listStyle: "none",
            p: 0,
            m: 0,
            textAlign: "left",
            display: "inline-block"
          }}>
            {[
              "Golang", "Java", "AWS", "Infrastructure as Code",
              "CI/CD", "Docker", "データレイク", "Slack英語コミュニケーション"
            ].map((skill, index) => (
              <li key={index} sx={{
                mb: 2,
                fontSize: [1, 2],
                position: "relative",
                pl: 3,
                "&::before": {
                  content: '"•"',
                  position: "absolute",
                  left: 0,
                  color: "#f8f8f8",
                  fontWeight: "bold",
                  fontSize: "1.2em"
                }
              }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div sx={{
          bg: "rgba(255, 255, 255, 0.25)",
          p: 5,
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          mb: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
          }
        }}>
          <Heading as="h3" sx={{
            fontSize: [3, 4],
            mb: 4,
            fontFamily: "heading",
            color: "#2d3748"
          }}>
            History
          </Heading>
          <div sx={{
            textAlign: "left",
            display: "inline-block",
            width: "100%",
            maxWidth: "500px"
          }}>
            {[
              { year: "2013.4", event: "大学入学（情報系学部）" },
              { year: "2017.3", event: "大学卒業" },
              { year: "2017.4", event: "メーカー開発子会社入社" },
              { year: "2019.5", event: "プロジェクト表彰" },
              { year: "2020.1", event: "Web系企業に転職" },
              { year: "2021.10", event: "OAuth2→OpenIDConnect移行担当" },
              { year: "2021.10", event: "インフラ担当" },
              { year: "2022.11", event: "Web系事業会社転職・データエンジニア" }
            ].map((item, index) => (
              <div key={index} sx={{
                display: "flex",
                mb: 2,
                fontSize: [1, 2],
                lineHeight: 1.4,
                borderBottom: index < 7 ? "1px solid rgba(255, 255, 255, 0.15)" : "none",
                pb: 2,
                position: "relative",
                transition: "all 0.2s ease",
                "&:hover": {
                  transform: "translateX(4px)",
                  "&::before": {
                    opacity: 1
                  }
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "-8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "3px",
                  height: "80%",
                  bg: "#f8f8f8",
                  borderRadius: "2px",
                  opacity: 0,
                  transition: "opacity 0.2s ease"
                }
              }}>
                <div sx={{
                  minWidth: "80px",
                  fontWeight: "bold",
                  color: "#f8f8f8",
                  opacity: 0.9,
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                }}>
                  {item.year}
                </div>
                <div sx={{ flex: 1 }}>
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div sx={{
          bg: "rgba(255, 255, 255, 0.25)",
          p: 5,
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          mb: 6,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
          }
        }}>
          <Heading as="h3" sx={{
            fontSize: [3, 4],
            mb: 4,
            fontFamily: "heading",
            color: "#2d3748"
          }}>
            Contact
          </Heading>
          <div sx={{
            fontSize: [2, 3],
            lineHeight: 2
          }}>
            <div sx={{
              mb: 4,
              p: 3,
              bg: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.2s ease",
              "&:hover": {
                bg: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.02)"
              }
            }}>
              <strong sx={{ color: "white" }}>GitHub:</strong><br />
              <a
                href="https://github.com/Uni-21"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#f8f8f8",
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderBottomColor: "#f8f8f8",
                    transform: "translateY(-1px)"
                  }
                }}
              >
                https://github.com/Uni-21
              </a>
            </div>
            <div sx={{
              p: 3,
              bg: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              transition: "all 0.2s ease",
              "&:hover": {
                bg: "rgba(255, 255, 255, 0.1)",
                transform: "scale(1.02)"
              }
            }}>
              <strong sx={{ color: "white" }}>メール:</strong><br />
              <a
                href="mailto:hnhhnnnz@gmail.com"
                sx={{
                  color: "#f8f8f8",
                  textDecoration: "none",
                  borderBottom: "1px solid transparent",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderBottomColor: "#f8f8f8",
                    transform: "translateY(-1px)"
                  }
                }}
              >
                hnhhnnnz@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div sx={{
          textAlign: "center"
        }}>
          <a
            href="/"
            sx={{
              display: "inline-block",
              bg: "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
              color: "#f8f8f8",
              px: 6,
              py: 3,
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: [2, 3],
              fontWeight: "bold",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                bg: "rgba(255, 255, 255, 0.35)",
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)"
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                transition: "left 0.5s ease"
              },
              "&:hover::before": {
                left: "100%"
              }
            }}
          >
            ← トップページに戻る
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default About